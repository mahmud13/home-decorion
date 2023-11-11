import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { Item } from '../_interfaces/Item';
import Overlay from './Overlay';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
interface Props {
  beforeImg: string;
  restoredImage: string;
  annotatedJson: Item[];
}
export default function MyTabs({
  beforeImg,
  restoredImage,
  annotatedJson,
}: Props): JSX.Element {
  const [restoredImgElement, setRestoredImgElement] =
    useState<HTMLImageElement | null>(null);
  const [overlays, setOverlays] = useState<ReactNode | null>(null);

  const onRestoredImageLoaded = (img: HTMLImageElement) => {
    setRestoredImgElement(img);
  };
  useEffect(() => {
    if (annotatedJson && restoredImage && restoredImgElement) {
      setOverlays(
        annotatedJson.map((item, idx) => {
          const imageWidth = restoredImgElement.width;
          const imageHeight = restoredImgElement.height;
          const { vertices } = item;
          const minX = Math.min(
            ...vertices.map((vertex) => vertex.x * imageWidth)
          );
          const minY = Math.min(
            ...vertices.map((vertex) => vertex.y * imageHeight)
          );
          const maxX = Math.max(
            ...vertices.map((vertex) => vertex.x * imageWidth)
          );
          const maxY = Math.max(
            ...vertices.map((vertex) => vertex.y * imageHeight)
          );
          const rectX = minX;
          const rectY = minY;
          const rectWidth = maxX - minX;
          const rectHeight = maxY - minY;
          return (
            <Overlay
              key={idx}
              rectX={rectX}
              rectY={rectY}
              rectWidth={rectWidth}
              rectHeight={rectHeight}
              name={item.name}
            />
          );
        })
      );
    }
  }, [restoredImage, restoredImgElement, annotatedJson]);

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
            <div className="relative">
              <Image
                alt="generated-image"
                src={restoredImage}
                className="w-full mx-auto max-h-[460px]"
                width={500}
                height={500}
                onLoadingComplete={(img) => onRestoredImageLoaded(img)}
              />
              {overlays}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
