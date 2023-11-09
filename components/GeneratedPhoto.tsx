import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

export default function GeneratedPhoto({
  originalPhoto,
  restoredImage,
}: {
  originalPhoto: string;
  restoredImage: string;
}): JSX.Element {
  return (
    <div className="mx-auto w-full px-4 xl:px-8 flex justify-center py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
        <div className="order-last lg:order-first px-4 py-5 col-span-1 w-full  h-screen flex flex-col items-start bg-white rounded-xl border border-gray-200 p-2 lg:p-5 lg:py-8 overflow-y-auto no-scrollbar">
          <div className="text-black text-lg w-full mb-4 text-center font-medium leading-7 pb-2.5">
            Furnitures Detection
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
            <div className="cursor-pointer">
              <Image
                alt=""
                src="/dummy-product.png"
                className="h-auto max-w-full rounded-lg"
                width={500}
                height={500}
              />
              <div className="text-sm">Brand</div>
              <div className="text-sm">Name</div>
              <div className="text-sm">Price</div>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last col-span-1 lg:col-span-2 w-full max-w- max-h-[900px] h-screen flex flex-col items-center justify-start bg-white rounded-xl border border-gray-200 p-4 lg:p-7 overflow-y-auto no-scrollbar">
          <MyTabs
            beforeImg={originalPhoto}
            afterImg={restoredImage}
          />
        </div>
      </div>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function MyTabs({
  beforeImg,
  afterImg,
}: {
  beforeImg: string;
  afterImg: string;
}) {
  const [restoredImgElement, setRestoredImgElement] =
    useState<HTMLImageElement | null>(null);

  const onRestoredImageLoaded = (img: HTMLImageElement) => {
    setRestoredImgElement(img);
  };
  return (
    <div className="w-full px-2   sm:px-0">
      <Tab.Group defaultIndex={1}>
        <Tab.List className="flex space-x-1 rounded-xl w-44 mx-auto bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }>
            Before
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }>
            After
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}>
            <Image
              alt="original-image"
              src={beforeImg}
              className="w-full mx-auto max-h-[460px]"
              width={500}
              height={500}
            />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}>
            <Image
              alt="generated-image"
              src={afterImg}
              className="w-full mx-auto max-h-[460px]"
              width={500}
              height={500}
              onLoadingComplete={(img) => onRestoredImageLoaded(img)}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
