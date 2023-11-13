import { Item } from '@app/dream/_interfaces/Item';
import ProductCard from '@components/ProductCard';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { FurnitureItem } from '@prisma/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

export default ({ item }: { item?: Item }) => {
  const [products, setProducts] = useState<FurnitureItem[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const getProducts = async () => {
    setLoading(true);
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        filter: {
          type: item?.name,
        },
      }),
    });
    if (res.status === 200) {
      setProducts(await res.json());
    }
    setLoading(false);
  };
  useEffect(() => {
    if (item) {
      getProducts();
    }
  }, [item]);

  // decide what to render
  let content = null;
  if (!loading && !products)
    content = (
      <div>
        <Image
          className="w-3/4 mx-auto h-auto"
          src="/none.svg"
          alt="not selected"
          width={400}
          height={400}
        />
        <div className="mt-6 text-gray-500 text-base">
          Please click a dot to detect the furniture
        </div>
      </div>
    );
  if (loading)
    content = (
      <div
        className="flex justify-center items-center w-full mt-20
      ">
        <GridLoader color="#d63636" />
      </div>
    );
  if (!loading && products)
    content = (
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    );
  if (!loading && products?.length === 0)
    content = <div className="mt-20">No product found</div>;
  return (
    <div className="w-full">
      <div className="flex justify-end pe-4 mb-4">
        <div className="cursor-pointer flex items-center">
          <AdjustmentsHorizontalIcon className="h-6 w-6 me-2 " />
          <span className="text-gray-500 text-sm">Filter</span>
        </div>
      </div>
      {content}
    </div>
  );
};
