import {
  CartSchema,
  CartsSchema,
  Cart,
  Carts,
} from '../../schemas/cart/schema';

const BASE_URL = 'https://fakestoreapi.com/carts';

export const getCarts = async (): Promise<Carts> => {
  const res = await fetch(BASE_URL);
  const data: unknown = await res.json();
  return CartsSchema.parse(data);
};

export const getCartById = async (id: number): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: unknown = await res.json();
  return CartSchema.parse(data);
};

export const addToCart = async (cart: Omit<Cart, 'id'>): Promise<Cart> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  });
  const data: unknown = await res.json();
  return CartSchema.parse(data);
};

export const updateToCart = async (
  id: number,
  cart: Omit<Cart, 'id'>,
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  });
  const data: unknown = await res.json();
  return CartSchema.parse(data);
};

export const removeToCart = async (id: number): Promise<void> => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};
