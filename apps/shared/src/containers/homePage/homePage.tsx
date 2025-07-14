'use client';

import { Products } from '../../schemas/products';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../../services/products';
import { Showcase } from '../../components/showcase';

export const HomePage = ({
  initialProducts,
}: {
  initialProducts: Products;
}) => {
  const { data: products } = useQuery({
    queryKey: ['home'],
    queryFn: () => getProductsByCategory('jewelery'),
    initialData: initialProducts,
    staleTime: 1000 * 60 * 5, // 5 min de cache
  });

  return (
    <>
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
      <Showcase title="Jewelery" products={products ?? []} />
    </>
  );
};
