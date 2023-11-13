import Link from 'next/link';
import Navbar from './Navbar';
import SquigglyLines from './SquigglyLines';

export default function Header() {
  return (
    <header className="bg-[url('/header-bg.jpg')] h-screen w-screen bg-cover bg-no-repeat relative">
      <div className="h-full w-full absolute top-0 left-0 text-white bg-[#0000009d]">
        <Navbar isLoggedIn={false} />
        <div className="text-white py-10 md:py-0 h-full w-full ">
          <div className="max-w-7xl h-full mx-auto px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center md:items-start">
            <h1 className="max-w-4xl text-center md:text-start font-display leading-tight md:leading-snug lg:leading-normal font-bold tracking-tight text-2xl md:text-4xl lg:text-6xl capitalize">
              <span>AI-powered Interior </span>
              <span className="relative whitespace-nowrap text-[#ff4800]">
                <SquigglyLines />
                <span className="relative">design</span>
              </span>{' '}
              creation tool
            </h1>
            <h2 className="mt-3 md:mt-5 max-w-xl text-base md:text-xl italic text-center md:text-start  text-white leading-7">
              <span>
                That provides instant cost estimates and sourcing assistance
              </span>
            </h2>
            <div className="mt-7 md:mt-10 ">
              <Link
                href={'/dream'}
                className="bg-[#ff4800] text-white  hover:bg-[rgb(74,199,40)] hover:text-white rounded-full transition-all px-8 md:px-10 py-3 md:py-3 text-base font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
