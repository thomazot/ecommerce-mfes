'use client';

import { useQuery } from '@tanstack/react-query';
import { Products } from '../../schemas/products';
import { getProductsByCategory } from '../../services/products';
import { Showcase } from '../../components/showcase';

type CategoryPageProps = {
  category: string;
  initialProducts: Products;
};

export const CategoryPage = ({
  category,
  initialProducts,
}: CategoryPageProps) => {
  const { data: products } = useQuery({
    queryKey: ['category', category],
    queryFn: () => getProductsByCategory(category),
    initialData: initialProducts,
    staleTime: 1000 * 60 * 5, // 5 min de cache
  });

  return (
    <>
      <Showcase title={`Categoria ${category}`} products={products} />
    </>
  );
};
