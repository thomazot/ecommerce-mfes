import { parseCookies, setCookie, destroyCookie } from "nookies";
import { CartItemSchema, CartItem } from "../../shared/schemas";

const CART_COOKIE_KEY = "cart";

export const getCart = (ctx?: any): CartItem[] => {
  const cookies = parseCookies(ctx);
  try {
    const parsed = JSON.parse(cookies[CART_COOKIE_KEY] || "[]");
    return CartItemSchema.array().parse(parsed);
  } catch {
    return [];
  }
};

export const setCart = (cart: CartItem[], ctx?: any) => {
  setCookie(ctx, CART_COOKIE_KEY, JSON.stringify(cart), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

export const clearCart = (ctx?: any) => {
  destroyCookie(ctx, CART_COOKIE_KEY, { path: "/" });
}; 