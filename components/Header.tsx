import Link from 'next/link';
import SquigglyLines from './SquigglyLines';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header>
      <Navbar isLoggedIn={false} />
      <div className="bg-[url('/header-bg.jpg')] md:h-screen bg-cover bg-no-repeat">
        <div className="h-full bg-gray-950/30 backdrop-brightness-50 text-white py-10 md:py-0">
          <div className="max-w-7xl h-full mx-auto px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center md:items-start">
            <h1 className="max-w-4xl text-center md:text-start font-display text-4xl font-bold tracking-normal sm:text-7xl">
              <span> Generating dream rooms</span>
              <span className="relative whitespace-nowrap text-[#ff4800]">
                <SquigglyLines />
                <span className="relative">using AI</span>
              </span>{' '}
              for everyone.
            </h1>
            <h2 className="mt-6 md:mt-12 max-w-xl text-base md:text-xl text-center md:text-start  text-white leading-7">
              <span>
                Take a picture of your room and see how your room looks in
                different themes. remodel your room today.
              </span>
            </h2>
            <div className="mt-10 ">
              <Link
                href={'/dream'}
                className="bg-[#ff4800] text-white  hover:bg-[rgb(74,199,40)] hover:text-white rounded-full transition-all px-8 md:px-10 py-2 md:py-3 text-sm font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/*function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}*/
