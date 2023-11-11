import React from 'react';
import Card from './Card';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section
      id="how-its-work"
      className="bg-[#fff] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-[#212529] text-center mb-8">
          <h3 className="font-bold text-3xl md:text-5xl mb-4 md:mb-6">
            How Does It Work?
          </h3>
          <p className="text-base md:text-xl font-semibold">
            Create beatuful interior designs in just 6 simple steps!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            alt="How it works"
            width={1400}
            height={1000}
            src="/How-it-works.png"
          />
        </div>
      </div>
    </section>
  );
}
