'use client';

import { UrlBuilder } from '@bytescale/sdk';
import { UploadWidgetConfig } from '@bytescale/upload-widget';
import { UploadDropzone } from '@bytescale/upload-widget-react';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import GeneratePhoto from '../../components/GeneratePhoto';
import Navbar from '../../components/Navbar';
import UploadPhoto from '../../components/UploadPhoto';
import { roomType, rooms, themeType, themes } from '../../utils/dropdownTypes';
import { Item } from '../annotate/route';

const options: UploadWidgetConfig = {
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : 'free',
  maxFileCount: 1,
  mimeTypes: ['image/jpeg', 'image/png', 'image/jpg'],
  editor: { images: { crop: false } },
  styles: {
    colors: {
      primary: '#ff4800', // Primary buttons & links
      error: '#d23f4d', // Error messages
      shade100: '#fff', // Standard text
      shade200: '#000', // Secondary button text
      shade300: '#000', // Secondary button text (hover)
      shade400: '#000000', // Welcome text
      shade500: '#fff9', // Modal close button
      shade600: '#BBBBBB', // Border
      shade700: '#fff2', // Progress indicator background
      shade800: '#1A1A1A', // File item background
      shade900: '#ffff', // Various (draggable crop buttons, etc.)
    },
  },
};

export default function DreamPage() {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [restoredImgElement, setRestoredImgElement] =
    useState<HTMLImageElement | null>(null);
  const [annotatedJson, setAnnotatedJson] = useState<Item[] | null>(null);
  const [overlays, setOverlays] = useState<ReactNode | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<themeType>(themes[0]);
  const [selectedRoom, setSelectedRoom] = useState<roomType>(rooms[0]);
  const [budget, setBudget] = useState<number>(0);

  const UploadDropZone = () => (
    <UploadDropzone
      options={options}
      onUpdate={({ uploadedFiles }) => {
        if (uploadedFiles.length !== 0) {
          const image = uploadedFiles[0];
          const imageName = image.originalFile.originalFileName;
          const imageUrl = UrlBuilder.url({
            accountId: image.accountId,
            filePath: image.filePath,
            options: {
              transformation: 'preset',
              transformationPreset: 'thumbnail',
            },
          });
          setPhotoName(imageName);
          setOriginalPhoto(imageUrl);
        }
      }}
      width="670px"
      height="250px"
    />
  );
  const onRestoredImageLoaded = (img: HTMLImageElement) => {
    setRestoredImgElement(img);
    setRestoredLoaded(true);
  };
  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch('/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl: fileUrl,
        theme: selectedTheme.name,
        room: selectedRoom.name,
      }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto[1]);
      annotatePhoto(newPhoto[1]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }
  useEffect(() => {
    if (annotatedJson && restoredImage && restoredImgElement) {
      setOverlays(
        annotatedJson.map((item) => {
          const imageWidth = restoredImgElement.width;
          const imageHeight = restoredImgElement.height;
          const { vertices } = item;
          const minX = Math.min(
            ...vertices.map((vertex) => vertex.x * imageWidth)
          );
          const minY = Math.min(
            ...vertices.map((vertex) => vertex.y * imageHeight)
          );
          const maxX = Math.max(
            ...vertices.map((vertex) => vertex.x * imageWidth)
          );
          const maxY = Math.max(
            ...vertices.map((vertex) => vertex.y * imageHeight)
          );
          const rectX = minX;
          const rectY = minY;
          const rectWidth = maxX - minX;
          const rectHeight = maxY - minY;
          return (
            <div
              style={{
                left: rectX + 'px',
                top: rectY + 'px',
                width: rectWidth + 'px',
                height: rectHeight + 'px',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'http://www.google.com/search?q=' + item.name,
                  '_blank'
                );
              }}
              className="annotation-rect"></div>
          );
        })
      );
    }
  }, [restoredImage, restoredImgElement, annotatedJson]);
  async function annotatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch('/annotate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let response = await res.json();
    if (res.status !== 200) {
      setError(response);
    } else {
      console.log({ response });
      setAnnotatedJson(response);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }
  const handleSubmit = (e, imgUrl) => {
    e.preventDefault();
    if (budget >= 0) {
      generatePhoto(imgUrl);
    }
  };
  return (
    <div className="flex w-full mx-auto flex-col items-center justify-center min-h-screen">
      <Navbar isLoggedIn={true} />
      {/* <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          Generate your <span className="text-blue-600">dream</span> room
        </h1>
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              {!restoredImage && (
                <>
                  <div className="space-y-4 w-full max-w-sm">
                    <div className="flex mt-3 items-center space-x-3">
                      <Image
                        src="/number-1-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium">
                        Choose your room theme.
                      </p>
                    </div>
                    <DropDown
                      theme={theme}
                      setTheme={(newTheme) =>
                        setTheme(newTheme as typeof theme)
                      }
                      themes={themes}
                    />
                  </div>
                  <div className="space-y-4 w-full max-w-sm">
                    <div className="flex mt-10 items-center space-x-3">
                      <Image
                        src="/number-2-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium">
                        Choose your room type.
                      </p>
                    </div>
                    <DropDown
                      theme={room}
                      setTheme={(newRoom) => setRoom(newRoom as typeof room)}
                      themes={rooms}
                    />
                  </div>
                  <div className="mt-4 w-full max-w-sm">
                    <div className="flex mt-6 w-96 items-center space-x-3">
                      <Image
                        src="/number-3-white.svg"
                        width={30}
                        height={30}
                        alt="1 icon"
                      />
                      <p className="text-left font-medium">
                        Upload a picture of your room.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {restoredImage && (
                <div>
                  Here's your remodeled <b>{room.toLowerCase()}</b> in the{' '}
                  <b>{theme.toLowerCase()}</b> theme!{' '}
                </div>
              )}
              <div
                className={`${
                  restoredLoaded ? 'visible mt-6 -ml-8' : 'invisible'
                }`}>
                <Toggle
                  className={`${restoredLoaded ? 'visible mb-6' : 'invisible'}`}
                  sideBySide={sideBySide}
                  setSideBySide={(newVal) => setSideBySide(newVal)}
                />
              </div>
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl h-96"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg">Original Room</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative w-full h-96"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg">Generated Room</h2>
                    <a
                      href={restoredImage}
                      target="_blank"
                      rel="noreferrer">
                      <div className="image-container">
                        <Image
                          alt="restored photo"
                          src={restoredImage}
                          className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in w-full h-96"
                          width={475}
                          height={475}
                          onLoadingComplete={(img) =>
                            onRestoredImageLoaded(img)
                          }
                        />
                        {overlays}
                      </div>
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-blue-500 rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 w-40">
                  <span className="pt-4">
                    <LoadingDots
                      color="white"
                      style="large"
                    />
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                      setError(null);
                    }}
                    className="bg-blue-500 rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition">
                    Generate New Room
                  </button>
                )}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(
                        restoredImage!,
                        appendNewToName(photoName!)
                      );
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition">
                    Download Generated Room
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main> */}
      <main className="bg-[#FCF3EC] w-full py-10 text-black text-center">
        <h2 className="text-5xl font-bold mb-6">Generate your Dream Room</h2>
        {!originalPhoto ? (
          <UploadPhoto>
            <UploadDropZone />
          </UploadPhoto>
        ) : (
          <GeneratePhoto
            originalPhoto={originalPhoto}
            themes={themes}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            rooms={rooms}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            budget={budget}
            setBudget={setBudget}
            handleSubmit={handleSubmit}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
