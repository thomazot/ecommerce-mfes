'use client';

import { useQuery } from '@tanstack/react-query';
import { Products } from '../../schemas/products';
import { getProductsByTerm } from '../../services/products';
import { Showcase } from '../../components/showcase';

type SearchPageProps = {
  term: string;
  initialProducts: Products;
};

export const SearchPage = ({ term, initialProducts }: SearchPageProps) => {
  const { data: products } = useQuery({
    queryKey: ['search', term],
    queryFn: () => getProductsByTerm(term),
    initialData: initialProducts,
    staleTime: 1000 * 60 * 5, // 5 min de cache
  });

  return (
    <>
      <Showcase title={`Resultado para "${term}"`} products={products} />
    </>
  );
};
