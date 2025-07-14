'use client';

import Image from 'next/image';
import { Button } from '../../commons/button';
import { Product } from '../../schemas/products';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/products';

export const ProductPage = ({
  id,
  initialProduct,
}: {
  id: number;
  initialProduct: Product;
}) => {
  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    initialData: initialProduct,
    staleTime: 1000 * 60 * 5, // 5 min de cache
  });

  function handleClick() {
    window.location.href = '/checkout';
  }

  return (
    <div className="sm:flex gap-4">
      {product?.image && (
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.title}
        />
      )}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <div className="font-semibold">{product?.description}</div>
        <Button onClick={handleClick}>Comprar</Button>
      </div>
    </div>
  );
};
