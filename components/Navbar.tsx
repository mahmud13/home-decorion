'use client';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

const navigation: {name: string; href: string}[] = [
  // { name: 'Home', href: '/' },
  // { name: "How It's Works", href: '/#how-its-work' },
  // { name: 'Gallery', href: '/#gallery' },
  // { name: 'Price', href: '/#price' },
  // { name: 'Contact', href: '/#contact' },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [fix, setFix] = useState<boolean>(false);
  const pathName = usePathname();

  const setFixed = () => {
    if (window.scrollY > 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', setFixed);
  }, []);

  let navBarStyle = '';
  if (pathName === '/') {
    navBarStyle = `fixed top-0 z-50 bg-gray-700 ${
      fix ? 'md:bg-white shadow-lg md:text-black' : 'md:bg-transparent'
    }`;
  }
  if (pathName !== '/') {
    navBarStyle = `bg-gray-700 ${
      fix &&
      'fixed top-0 z-50 md:bg-white shadow-lg md:text-black transition-all duration-500 ease-in'
    }`;
  }

  return (
    <>
      <Disclosure
        as="nav"
        className={`w-full transition-all duration-500 ease-in-out ${navBarStyle}`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 lg:h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      href="/"
                      className="flex flex-shrink-0 items-center">
                      <Image
                        alt="header text"
                        src="/logo.png"
                        className="sm:w-10 sm:h-10 w-9 h-9"
                        width={24}
                        height={24}
                      />
                      <span className='className="sm:text-3xl text-lg font-bold ml-1 sm:ml-2 tracking-tight"'>
                        DECORION
                      </span>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 md:ml-16 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathName === item.href && !fix
                              ? 'bg-gray-900 text-white'
                              : pathName === item.href && fix
                              ? 'bg-gray-900 text-white'
                              : ' hover:bg-gray-900 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={
                            pathName === item.href ? 'page' : undefined
                          }>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {isLoggedIn ? (
                    <Menu
                      as="div"
                      className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      href={'/login'}
                      className={` ${
                        fix
                          ? 'bg-[#ff4800] text-white'
                          : 'bg-white text-[#ff4800]'
                      }    hover:bg-[#4ac728] hover:text-white rounded-full transition-all px-4 md:px-7 py-2 text-sm md:text-base font-medium`}>
                      Log In
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathName === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={pathName === item.href ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
