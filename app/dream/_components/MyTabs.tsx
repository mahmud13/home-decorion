import { Tab } from "@headlessui/react";
import { ReactNode, useEffect, useState } from "react";
import { Item } from "../_interfaces/Item";
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function MyTabs({
  beforeImg,
  restoredImage,
  annotatedJson,
}: {
  beforeImg: string;
  restoredImage: string;
  annotatedJson: Item[];
}) {
  const [restoredImgElement, setRestoredImgElement] =
    useState<HTMLImageElement | null>(null);
  const [overlays, setOverlays] = useState<ReactNode | null>(null);

  const onRestoredImageLoaded = (img: HTMLImageElement) => {
    setRestoredImgElement(img);
  };
  useEffect(() => {
    if (annotatedJson && restoredImage && restoredImgElement) {
      setOverlays(
        annotatedJson.map((item) => {
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
            <div
              style={{
                left: rectX + 'px',
                top: rectY + 'px',
                width: rectWidth + 'px',
                height: rectHeight + 'px',
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'http://www.google.com/search?q=' + item.name,
                  '_blank'
                );
              }}
              className="annotation-rect"></div>
          );
        })
      );
    }
    console.log('result');
    console.log(annotatedJson);
  }, [restoredImage, restoredImgElement, annotatedJson]);
  useEffect(() => {
    console.log(overlays);
  }, [overlays]);
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
            <div className="image-container">
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
