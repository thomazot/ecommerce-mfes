import {
  ProductSchema,
  ProductsSchema,
  Product,
  Products,
} from '../../schemas/products/schema';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<Products> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: unknown = await res.json();
  return ProductSchema.parse(data);
};

export const getProductsByCategory = async (
  category: string,
): Promise<Products> => {
  const res = await fetch(
    `${BASE_URL}/category/${encodeURIComponent(category)}`,
  );
  const data: unknown = await res.json();
  return ProductsSchema.parse(data);
};

export const getProductsByTerm = async (term: string): Promise<Products> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  const products = ProductsSchema.parse(data);
  const lowerTerm = term.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerTerm) ||
      product.description.toLowerCase().includes(lowerTerm),
  );
};
