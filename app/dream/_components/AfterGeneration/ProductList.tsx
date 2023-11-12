import { Item } from '@app/dream/_interfaces/Item';
import ProductCard from '@components/ProductCard';
import { FurnitureItem } from '@prisma/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default ({ item }: { item?: Item }) => {
  const [products, setProducts] = useState<FurnitureItem[]>();
  const getProducts = async () => {
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
  };
  useEffect(() => {
    if (item) {
      getProducts();
    }
  }, [item]);
  return (
    <div className="grid grid-cols-1 gap-4">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};
