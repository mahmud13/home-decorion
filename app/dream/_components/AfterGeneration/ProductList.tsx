import { Item } from "@app/dream/_interfaces/Item";
import { FurnitureItem } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default ({ item }: { item?: Item }) => {
  const [products, setProducts] = useState<FurnitureItem[]>();
  const getProducts = async () => {
    const res = await fetch("/api/products", {
      method: "POST",
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
    if(item) {
      getProducts();
    }
  }, [item]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products &&
        products.map((product) => (
          <div className="cursor-pointer" key={product.id}>
            <Image
              alt=""
              src={product.photo}
              className="h-auto max-w-full rounded-lg"
              width={500}
              height={500}
            />
            <div className="text-sm">{product.brand}</div>
            <div className="text-sm">{product.name}</div>
            <div className="text-sm">{product.price.toString()}</div>
          </div>
        ))}
    </div>
  );
};
