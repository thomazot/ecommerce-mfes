import { CategoriesSchema } from '../../schemas/category/schema';

const BASE_URL = 'https://fakestoreapi.com/products/categories';

export const fetchCategories = async () => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return CategoriesSchema.parse(data);
};
