import Image from 'next/image';
import Link from 'next/link';

export default function StartFreeTrial() {
  return (
    <section className="bg-[#000] text-white">
      <div className="w-full mx-auto flex flex-col lg:flex-row lg:before:content-[''] lg:before:w-4/6 lg:before:h-full lg:before:bg-[url('/signup-free-bg.png')] lg:before:bg-cover lg:before:bg-no-repeat lg:before:absolute lg:before:top-0 lg:before:right-0 lg:relative lg:before:z-[1] lg:z-[1]">
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px]">
          <Image
            alt="man"
            src="/man-with-laptop.jpg"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-full lg:w-1/2 z-[2] flex justify-center items-center bg-[#ff4800] py-12 md:py-16">
          <div className="w-full px-8 text-center lg:text-start">
            <h2 className="text-3xl md:text-[40px] font-bold capitalize">
              Start your free trial
            </h2>
            <form className="mt-5 md:mt-7 md:mb-3 flex flex-wrap justify-center lg:justify-start items-center gap-3">
              <input
                type="email"
                name="email"
                className="w-[90%] md:w-[70%]  mx-auto lg:mx-0 rounded-full border-none py-3 ps-4 
                bg-[#212529] placeholder-gray-400 text-white text-sm md:text-base focus:outline-none focus:ring-0 focus:ring-offset-0"
                placeholder="Enter your email here"
                required
              />
              <Link
                href={'/signup'}
                className="bg-white text-[#ff4800]  hover:bg-[rgb(74,199,40)] hover:text-white rounded-full transition-all px-5 md:px-6 py-2 md:py-3 font-medium">
                SIgn Up Free
              </Link>
            </form>
            <p className="lg:max-w-sm text-base mx-auto lg:mx-0 mt-4">
              Tailored AI Solutions for Every Corner of the Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
