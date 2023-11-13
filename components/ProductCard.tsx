import Image from 'next/image';

export default function ProductCard({ product }: any): JSX.Element {
  let brandLogo = '';
  if (product.brand === 'AliExpress')
    brandLogo = '/images/logos/aliExpress.png';
  if (product.brand === 'Shopee') brandLogo = '/images/logos/shopee.png';
  if (product.brand === 'Lazada') brandLogo = '/images/logos/lazada.png';
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between lg:flex-col xl:flex-row items-center border rounded-lg shadow-md border-gray-700 bg-gray-700  p-3">
        <div className="w-full h-40 md:h-48 md:w-56 lg:h-50 lg:w-full xl:w-96 xl:h-56 py-2 mb-4 md:mb-0">
          <Image
            className="w-full h-full rounded-lg"
            src={product.photo}
            alt={product.name}
            width={2000}
            height={1200}
          />
        </div>
        <div className="flex flex-col justify-between px-2 ps-3 lg:h-full">
          <div className="flex justify-between gap-3">
            <div className="w-3/5 text-start text-white">
              <h5 className="font-bold text-sm md:text-lg md:mb-2 lg:text-sm 2xl:text-base mb-1 2xl:mb-3 ">
                {product.name}
              </h5>
              <p className="text-sm text-gray-200 lg:text-xs 2xl:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                magnam quas,
              </p>
            </div>
            <div className="w-2/5 flex flex-col justify-between pt-2">
              <div className="flex flex-col justify-center items-center text-right">
                <h6 className="font-bold text-sm md:text-lg lg:text-sm 2xl:text-lg text-white mb-1 md:mb-4 xl:mb-5">
                  RM {product.price.toString()}
                </h6>
                <div className="h-10 w-10 mt-3 lg:mt-0 xl:mt-3 2xl:w-16">
                  <Image
                    className="w-full h-auto"
                    src={brandLogo}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 md:mr-auto lg:mx-auto mt-3">
            <button
              type="button"
              className="bg-[#ff4800] text-white hover:bg-[rgb(74,199,40)] hover:text-white rounded-full font-medium  text-sm px-5 py-2 md:py-3 lg:py-2 focus:outline-none w-full">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
