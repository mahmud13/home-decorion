'use client';
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
      <section className="bg-[#FCF3EC] h-screen">
        <div className="px-4 md:px-20 ">
          <div className="bg-white shadow-lg md:flex md:justify-center md:gap-6 h-[680px]">
            <div className="md:w-1/2 hidden md:block">
              <Image
                alt=""
                src="/generated-pic-2.jpg"
                className="w-full h-full"
                width={600}
                height={600}
              />
            </div>

            <div className="w-full md:w-1/2 flex min-h-full flex-1 flex-col justify-center px-6">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link
                  href="/"
                  className="flex space-x-2 justify-center">
                  <Image
                    alt="header text"
                    src="/bed.svg"
                    className="sm:w-10 sm:h-10 w-9 h-9"
                    width={24}
                    height={24}
                  />
                  <h1 className="sm:text-3xl text-black text-xl font-bold ml-2 tracking-tight">
                    DECORION
                  </h1>
                </Link>
                {pathName === '/auth/login' && (
                  <div className="mt-6 text-center text-base leading-6 tracking-tight text-gray-900">
                    <div className="font-bold text-3xl mb-4">Welcome Back</div>
                    Please enter your credentials to sign in to the account
                  </div>
                )}
                {pathName === '/auth/signup' && (
                  <div className="mt-6 text-center text-base leading-6 tracking-tight text-gray-900">
                    <div className="font-bold text-3xl mb-4">
                      Create your account
                    </div>
                    Please note that email verification is required for signup.
                  </div>
                )}

                <div className="mt-6 h-[42px] w-[260px] lg:w-[344px] lg:h-[52px] grid grid-cols-2 rounded-full bg-stone-200 p-[4px] mx-auto">
                  <Link
                    href="/auth/login"
                    className={`w-full flex justify-center items-center text-base font-medium leading-tight rounded-[40px] transform transition ease-in-out duration-200 ${
                      pathName === '/auth/login' && 'bg-cyan-950 text-white'
                    } `}>
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    className={`w-full flex justify-center items-center text-base font-medium leading-tight rounded-[40px] transform transition ease-in-out duration-200 cursor-pointer ${
                      pathName === '/auth/signup' && 'bg-cyan-950 text-white'
                    } `}>
                    Sign Up
                  </Link>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
