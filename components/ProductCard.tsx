import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { FurnitureItem } from '@prisma/client';
import Image from 'next/image';

export default function ProductCard({ product }: any): JSX.Element {
  let brandLogo = '';
  if (product.brand === 'AliExpress')
    brandLogo = '/images/logos/aliExpress.png';
  if (product.brand === 'Shopee') brandLogo = '/images/logos/shopee.png';
  if (product.brand === 'Lazada') brandLogo = '/images/logos/lazada.png';
  return (
    <div className="flex flex-col items-center border  rounded-lg shadow-md md:flex-row border-gray-700 bg-gray-700  p-3">
      <div className="w-full h-full py-2 mb-4 md:mb-0">
        <Image
          className="h-40 md:h-48 lg:h-full w-full lg:w-36 rounded-lg"
          src={product.photo}
          alt={product.name}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between px-2 ps-3 h-full">
        <div className="flex">
          <div className="w-3/5 text-start">
            <h5 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              magnam quas,
            </p>
          </div>
          <div className="w-2/5 flex flex-col justify-between pt-2">
            <form
              action=""
              className="mx-auto flex justify-between items-center mb-auto">
              <MinusIcon className="text-white h-5 w-5 cursor-pointer" />
              <input
                type="text"
                name=""
                id=""
                className="w-10 h-6 px-2 mx-1"
                placeholder="1"
              />
              <PlusIcon className="text-white h-5 w-5 cursor-pointer" />
            </form>
            <div className="flex flex-col justify-center items-center text-right">
              <h6 className="font-bold text-base text-white mb-1">
                RM {product.price.toString()}
              </h6>
              <div>
                <Image
                  className="h-8 w-10"
                  src={brandLogo}
                  alt={product.name}
                  width={100}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 mx-auto mt-3">
          <button
            type="button"
            className="bg-[#ff4800] text-white hover:bg-[rgb(74,199,40)] hover:text-white rounded-full font-medium  text-sm px-5 py-1  focus:outline-none w-full">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
