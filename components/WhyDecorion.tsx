import React from 'react';
import Services from './Services/Services';

export default function WhyDecorion() {
  return (
    <section className="bg-[#F2F6F9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-[#212529] text-center mb-8">
          <h3 className="font-bold text-3xl md:text-5xl mb-4 md:mb-6">
            Why Decorion?
          </h3>
          <p className="text-base md:text-xl font-semibold">
            We Offer Professional Solutions
          </p>
        </div>
        <Services />
      </div>
    </section>
  );
}
