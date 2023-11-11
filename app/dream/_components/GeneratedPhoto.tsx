import Image from 'next/image';
import MyTabs from './MyTabs';

export default function GeneratedPhoto({
  originalPhoto,
  restoredImage,
  annotatedJson,
}: {
  originalPhoto: string;
  restoredImage: string;
  annotatedJson: any;
}): JSX.Element {
  return (
    <div className="mx-auto w-full px-4 xl:px-8 flex justify-center py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
        <div className="order-last lg:order-first px-4 py-5 col-span-1 w-full  h-screen flex flex-col items-start bg-white rounded-xl border border-gray-200 p-2 lg:p-5 lg:py-8 overflow-y-auto no-scrollbar">
          <div className="text-black text-lg w-full mb-4 text-center font-medium leading-7 pb-2.5">
            Furnitures Detection
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array(12)
              .fill(0)
              .map((_, i) => (
                <div
                  className="cursor-pointer"
                  key={i}>
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
              ))}
          </div>
        </div>
        <div className="order-first lg:order-last col-span-1 lg:col-span-2 w-full max-w- max-h-[900px] h-screen flex flex-col items-center justify-start bg-white rounded-xl border border-gray-200 p-4 lg:p-7 overflow-y-auto no-scrollbar">
          <MyTabs
            beforeImg={originalPhoto}
            restoredImage={restoredImage}
            annotatedJson={annotatedJson}
          />
        </div>
      </div>
    </div>
  );
}
