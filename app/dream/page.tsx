'use client';

import { UrlBuilder } from '@bytescale/sdk';
import { UploadWidgetConfig } from '@bytescale/upload-widget';
import { UploadDropzone } from '@bytescale/upload-widget-react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import Footer from '../../components/Footer';
import GeneratePhoto from '../../components/GeneratePhoto/GeneratePhoto';
import GeneratedPhoto from '../../components/GeneratedPhoto';
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

    try {
      console.log(fileUrl);
      const res = await fetch(
        'http://california-a.tensordockmarketplace.com:20505/generate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt:
              'a A 3-seater sofa, a coffee table and a variety of home decors, designer wall in a living room, realistic, 4k, interior, Modern Asian, extremely detailed, cinematic photo, ultra-detailed, ultra-realistic',
            negative_prompt:
              '(normal quality), (low quality), (worst quality), paintings, sketches,extra digit,fewer digits,cropped,worst quality',
            original_image: fileUrl,
            scale: 7.5,
            steps: 40,
            seed:
              Math.floor(Math.random() * (999999999 - 10000000 + 1)) + 10000000,
          }),
        }
      );
      let newPhoto = await res.json();
      let downloadId = newPhoto?.download_id;

      // GET request to get the status of the image restoration process & return the result when it's ready
      if (downloadId) {
        let restoredImage: string | null = null;
        while (!restoredImage) {
          // Loop in 1s intervals until the alt text is ready
          console.log('polling for result...');
          let finalResponse = await fetch(
            `http://california-a.tensordockmarketplace.com:20505/download/${downloadId}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          let blob = await finalResponse.blob();
          restoredImage = URL.createObjectURL(blob);
          console.log(restoredImage);
          setRestoredImage(restoredImage);
          annotatePhoto(blob);
        }
      }
    } catch (error) {
      setError('something went wrong');
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

  async function annotatePhoto(fileBlob: any) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    // Create a FormData object and append the Blob
    const formData = new FormData();
    formData.append('image', fileBlob, 'image.jpg');
    const res = await fetch('/annotate', {
      method: 'POST',
      body: formData,
    });

    let response = await res.json();
    console.log(response);
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>, imgUrl: string) => {
    e.preventDefault();
    setError(null);
    if (budget >= 0) {
      generatePhoto(imgUrl);
    }
  };

  const handleTryAgain = () => {
    setError(null);
  };

  // decide what to render
  let content = null;
  if (loading)
    content = (
      <div className="flex items-center justify-center w-full h-screen z-50">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <RingLoader
            color="hsla(168, 67%, 53%, 1)"
            size={200}
          />
          <div>Loading ...</div>
        </div>
      </div>
    );
  if (!loading && error !== '')
    content = (
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-600">500</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Something Went Wrong!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleTryAgain}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  if (!originalPhoto && !loading && !error)
    content = (
      <UploadPhoto>
        <UploadDropZone />
      </UploadPhoto>
    );
  if (!loading && !error && originalPhoto)
    content = (
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
    );
  if (!loading && !error && originalPhoto && restoredImage)
    content = (
      <GeneratedPhoto
        originalPhoto={originalPhoto}
        restoredImage={restoredImage}
        annotatedJson={annotatedJson}
      />
    );
  return (
    <div className="flex w-full mx-auto flex-col items-center justify-center min-h-screen">
      {!loading && <Navbar isLoggedIn={true} />}
      {/* <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          Generate your <span className="text-blue-600">dream</span> room
        </h1>
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
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
      <main className="bg-[#FCF3EC] w-full text-black text-center">
        {content}
      </main>
      {!loading && <Footer />}
    </div>
  );
}
