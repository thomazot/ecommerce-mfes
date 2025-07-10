"use client";
import Image from "next/image";
import { useProductList } from "./ProductListContext";
import React from "react";

export const ProductListClient: React.FC = () => {
  const { products, isLoading, isError } = useProductList();

  if (isError) {
    return <p className="text-red-600">Erro ao atualizar produtos.</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <li key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
          <Image src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-2" width={128} height={128} />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <span className="text-lg font-bold mb-2">R$ {product.price.toFixed(2)}</span>
          <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" tabIndex={0} aria-label={`Adicionar ${product.title} ao carrinho`}>
            Adicionar ao carrinho
          </button>
        </li>
      ))}
      {isLoading && <li className="col-span-full text-center text-xs text-gray-400">Atualizando produtos...</li>}
    </ul>
  );
}; 