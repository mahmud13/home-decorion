'use client';

import { UrlBuilder } from '@bytescale/sdk';
import { UploadWidgetConfig } from '@bytescale/upload-widget';
import { UploadDropzone } from '@bytescale/upload-widget-react';
import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import UploadPhoto from '../../components/UploadPhoto';
import { roomType, rooms, themeType, themes } from '../../utils/dropdownTypes';
import { Item } from './_interfaces/Item';
import GeneratedPhoto from './_components/GeneratedPhoto';
import GeneratePhoto from './_components/GeneratePhoto/GeneratePhoto';

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
  const [annotatedJson, setAnnotatedJson] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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
          setOriginalPhoto(imageUrl);
        }
      }}
      width="670px"
      height="250px"
    />
  );
  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch("/dream/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl, theme: selectedTheme, room: selectedRoom }),
    });

    let newPhoto = await res.json();
    console.log(newPhoto);
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto.restoredImageUrl);
      annotatePhoto(newPhoto.restoredImageUrl);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  async function annotatePhoto(restoredImageUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch("/dream/api/annotate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: restoredImageUrl }),
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
      <main className="bg-[#FCF3EC] w-full text-black text-center">
        {content}
      </main>
      {!loading && <Footer />}
    </div>
  );
}
