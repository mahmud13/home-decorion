import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <div className="bg-[#FCF3EC] h-screen">
        <div className="px-20 ">
          <div className="bg-white shadow-lg flex justify-center gap-6 h-[680px]">
            <div className="w-1/2">
              <Image
                alt=""
                src="/generated-pic-2.jpg"
                className="w-full h-full"
                width={600}
                height={600}
              />
            </div>
            <div className="w-1/2 flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
                <h2 className="mt-10 text-center text-xl font-semibold leading-6 tracking-tight text-gray-900">
                  Please enter your credentials to sign in to the account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                  className="space-y-6"
                  action="#"
                  method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                  </a>
                  <br />
                  <Link href={'/dream'}>Generate photo</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
