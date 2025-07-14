'use client';

import { Button } from '@ecommerce-mfe/shared/commons/button';
import { Product } from '@ecommerce-mfe/shared/schemas/products';
import Image from 'next/image';

export default function TemplateProduct({ product }: { product: Product }) {
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
}
