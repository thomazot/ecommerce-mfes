import React from 'react';
import { getProducts } from '@shared/services/product';
import { Product } from '@shared/schemas';
import { ProductListProvider } from './ProductListContext';
import { ProductListClient } from './ProductListClient';

export const metadata = {
  title: 'Produtos em destaque | E-commerce',
  description: 'Confira os melhores produtos em destaque da nossa loja.',
  openGraph: {
    title: 'Produtos em destaque | E-commerce',
    description: 'Confira os melhores produtos em destaque da nossa loja.',
    url: '/',
  },
  robots: 'index, follow',
};

type State = 'success' | 'empty' | 'error';

const renderContent = (state: State, products: Product[]) => {
  const statusMappers = {
    success: (products?: Product[]) => (
      <ProductListProvider initialProducts={products ?? []}>
        <ProductListClient />
      </ProductListProvider>
    ),
    empty: () => (
      <p  className="text-gray-500">Nenhum produto encontrado.</p>
    ),
    error: () => (
      <p className="text-red-600">Erro ao carregar produtos. Tente novamente mais tarde.</p>
    ),
  }

  return statusMappers[state](products)
};

export default async function HomePage() {
  let products: Product[] = [];
  let state: State = 'success';

  try {
    products = await getProducts();
    if (!products.length) state = 'empty';
  } catch {
    state = 'error';
  }

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Produtos em destaque</h1>
      {renderContent(state, products)}
    </main>
  );
}
