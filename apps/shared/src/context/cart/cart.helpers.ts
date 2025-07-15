import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { Cart } from '../../schemas/cart';

const CART_ID_COOKIE = 'cartId';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias
const COOKIE_PATH = '/';

export function getCartIdFromCookies() {
  const cookies = parseCookies();
  const cookieId = cookies[CART_ID_COOKIE];
  return cookieId ? Number(cookieId) : null;
}

export function setCartIdCookie(id: number) {
  setCookie(null, CART_ID_COOKIE, String(id), {
    maxAge: COOKIE_MAX_AGE,
    path: COOKIE_PATH,
  });
}

export function destroyCartIdCookie() {
  destroyCookie(null, CART_ID_COOKIE, { path: COOKIE_PATH });
}

export function generateCartId() {
  return Math.floor(Math.random() * 1000000);
}

export function mergeProduct(
  products: Cart['products'],
  productId: number,
  quantity: number,
) {
  const existing = products.find((p) => p.productId === productId);
  if (existing) {
    return products.map((p) =>
      p.productId === productId ? { ...p, quantity: p.quantity + quantity } : p,
    );
  }
  return [...products, { productId, quantity }];
}

export function updateProductQuantity(
  products: Cart['products'],
  productId: number,
  quantity: number,
) {
  return products.map((p) =>
    p.productId === productId ? { ...p, quantity } : p,
  );
}

export function removeProductFromCart(
  products: Cart['products'],
  productId: number,
) {
  return products.filter((p) => p.productId !== productId);
}

export function getTotalCartItems(products: Cart['products']): number {
  return products.reduce((total, item) => total + item.quantity, 0);
}
