import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ResizablePanel from './ResizablePanel';

export default function UploadPhoto({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-5xl font-bold my-6">Generate your Dream Room</h2>
      <div className="bg-white w-3/4 mx-auto py-4 rounded-lg">
        <div className="flex justify-center items-center">
          <div className="bg-[#F8F8F8] w-28 h-28 rounded-full p-4">
            <Image
              alt="Upload icon"
              src="/upload.png"
              className=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <h3 className="font-semibold text-3xl mb-2">
          Upload a photo of your space
        </h3>
        <p className="text-[6C7871] text-base leading-7">
          Drag and drop or choose file <br /> PNG, JPEG & JPG files are allowd.
          No larger than 25MB
        </p>
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="flex justify-between items-center w-full flex-col mt-2">
              {children}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </div>
    </>
  );
}
