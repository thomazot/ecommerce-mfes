"use client";
import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@shared/services/product";
import { Product } from "@shared/schemas";

type ProductListContextType = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

const ProductListContext = createContext<ProductListContextType | undefined>(undefined);

export function ProductListProvider({ children, initialProducts }: { children: ReactNode; initialProducts: Product[] }) {
  
  const { data = initialProducts, isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    initialData: initialProducts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  return (
    <ProductListContext.Provider value={{ products: data, isLoading, isError }}>
      {children}
    </ProductListContext.Provider>
  );
}

export function useProductList() {
  const ctx = useContext(ProductListContext);
  if (!ctx) throw new Error("useProductList must be used within a ProductListProvider");
  return ctx;
} 