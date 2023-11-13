import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { Item } from '../../_interfaces/Item';
import Overlay from './Overlay';

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');
interface Props {
  beforeImg: string;
  restoredImage: string;
  annotatedJson: Item[] | null;
  onItemClicked: (item: Item) => void;
}
export default function MyTabs({
  beforeImg,
  restoredImage,
  annotatedJson,
  onItemClicked,
}: Props) {
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
            <div className="relative aspect-w-16 aspect-h-10">
              <Image
                alt="original-image"
                src={beforeImg}
                className="w-full h-full"
                fill={true}
                quality={100}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 '
            )}>
            <div className="relative aspect-w-16 aspect-h-10">
              <Image
                alt="generated-image"
                src={restoredImage}
                fill={true}
                quality={100}
                onLoadingComplete={(img) => onRestoredImageLoaded(img)}
              />
              {annotatedJson &&
                restoredImgElement &&
                annotatedJson?.map((item) => (
                  <Overlay
                    item={item}
                    parentImg={restoredImgElement}
                    onItemClicked={() => onItemClicked(item)}
                    key={item.name + item.score}></Overlay>
                ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
