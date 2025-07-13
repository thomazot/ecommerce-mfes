import {
  CartSchema,
  CartsSchema,
  Cart,
  Carts,
} from '../../schemas/cart/schema';

const BASE_URL = 'https://fakestoreapi.com/carts';

export const fetchAllCarts = async (): Promise<Carts> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return CartsSchema.parse(data);
};

export const fetchCartById = async (id: number): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: unknown = await res.json();
  return CartSchema.parse(data);
};

export const fetchCartsByUser = async (userId: number): Promise<Carts> => {
  const res = await fetch(`${BASE_URL}/user/${userId}`);
  const data: unknown = await res.json();
  return CartsSchema.parse(data);
};
