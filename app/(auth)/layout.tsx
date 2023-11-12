'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <main>
        <section className="bg-[#FCF3EC] h-screen">
          <div className="px-4 md:px-20 ">
            <div className="bg-white shadow-lg md:flex md:justify-center md:gap-6 h-[680px]">
              <div className="md:w-1/2 hidden md:block">
                <Image
                  alt=""
                  src="/signup-login-sidebar-image.jpg"
                  className="w-full h-full"
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="w-full md:w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 relative">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="flex space-x-2 justify-center">
                    <Image
                      alt="header text"
                      src="/logo.png"
                      className="sm:w-10 sm:h-10 w-9 h-9"
                      width={24}
                      height={24}
                    />
                    <h1 className="sm:text-3xl text-black text-xl font-bold ml-2 tracking-tight">
                      DECORION
                    </h1>
                  </div>
                  {pathName === '/login' && (
                    <div className="mt-6 text-center text-base leading-6 tracking-tight text-gray-900">
                      <div className="font-bold text-3xl mb-4">
                        Welcome Back
                      </div>
                      Please enter your credentials to sign in to the account
                    </div>
                  )}
                  {pathName === '/signup' && (
                    <div className="mt-6 text-center text-base leading-6 tracking-tight text-gray-900">
                      <div className="font-bold text-3xl mb-4">
                        Create your account
                      </div>
                      Please note that email verification is required for
                      signup.
                    </div>
                  )}

                  <div className="mt-6 h-[42px] w-[260px] lg:w-[344px] lg:h-[52px] grid grid-cols-2 rounded-full bg-stone-200 p-[4px] mx-auto">
                    <Link
                      href="login"
                      className={`w-full flex justify-center items-center text-base font-medium leading-tight rounded-[40px] transform transition ease-in-out duration-200 ${
                        pathName === '/login' && 'bg-cyan-950 text-white'
                      } `}>
                      Sign in
                    </Link>
                    <Link
                      href="signup"
                      className={`w-full flex justify-center items-center text-base font-medium leading-tight rounded-[40px] transform transition ease-in-out duration-200 cursor-pointer ${
                        pathName === '/signup' && 'bg-cyan-950 text-white'
                      } `}>
                      Sign Up
                    </Link>
                  </div>
                </div>
                {children}
                <Link
                  href="/"
                  className="absolute top-4 right-4">
                  <XMarkIcon
                    className=" block h-10 w-10 text-black cursor-pointer"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
