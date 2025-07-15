'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import {
  getCartById,
  addToCart,
  updateToCart,
  removeToCart,
} from '../../services/cart/cart';
import { getProductById } from '../../services/products/products';
import { Product } from '../../schemas/products/schema';
import {
  cartReducer,
  initialState,
  CartStatus,
  CartState,
} from './cart.reduce';
import {
  getCartIdFromCookies,
  setCartIdCookie,
  destroyCartIdCookie,
  mergeProduct,
  updateProductQuantity,
  removeProductFromCart,
  getTotalCartItems,
} from './cart.helpers';

interface CartContextType {
  cart: CartState['cart'];
  cartId: CartState['cartId'];
  cartProducts: Record<number, Product>;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateToCart: (productId: number, quantity: number) => Promise<void>;
  removeToCart: (productId: number) => Promise<void>;
  isLoading: boolean;
  status: CartStatus;
  statusProductId: number | null;
  totalCartItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState<Record<number, Product>>({});
  const totalCartItems = state.cart
    ? getTotalCartItems(state.cart.products)
    : 0;

  useEffect(() => {
    const id = getCartIdFromCookies();
    if (id) dispatch({ type: 'SET_CART_ID', cartId: id });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!state.cartId) return;
    setIsLoading(true);
    getCartById(state.cartId)
      .then((c) => dispatch({ type: 'SET_CART', cart: c }))
      .catch(() => dispatch({ type: 'SET_CART', cart: null }))
      .finally(() => setIsLoading(false));
  }, [state.cartId]);

  // Buscar detalhes dos produtos do carrinho sempre que o cart mudar
  useEffect(() => {
    const fetchProducts = async () => {
      if (!state.cart || state.cart.products.length === 0) {
        setCartProducts({});
        return;
      }
      const uniqueIds = Array.from(
        new Set(state.cart.products.map((p) => p.productId)),
      );
      const entries = await Promise.all(
        uniqueIds.map(async (id) => {
          try {
            const prod = await getProductById(id);
            return [id, prod] as [number, Product];
          } catch {
            return undefined;
          }
        }),
      );
      setCartProducts(
        Object.fromEntries(entries.filter((e): e is [number, Product] => !!e)),
      );
    };
    void fetchProducts();
  }, [state.cart]);

  const createCart = useCallback(
    async (productId: number, quantity: number = 1) => {
      const newCart = {
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId, quantity }],
      };
      const created = await addToCart(newCart);
      dispatch({ type: 'SET_CART_ID', cartId: created.id });
      setCartIdCookie(created.id);
      dispatch({ type: 'SET_CART', cart: created });
    },
    [],
  );

  const addToCartHandler = useCallback(
    async (productId: number, quantity: number = 1) => {
      dispatch({
        type: 'SET_STATUS',
        status: 'adding',
        statusProductId: productId,
      });
      try {
        if (!state.cartId || !state.cart) {
          await createCart(productId, quantity);
          dispatch({
            type: 'SET_STATUS',
            status: 'idle',
            statusProductId: null,
          });
          return;
        }
        const updatedProducts = mergeProduct(
          state.cart.products,
          productId,
          quantity,
        );
        const updated = await updateToCart(state.cartId, {
          userId: state.cart.userId,
          date: new Date().toISOString(),
          products: updatedProducts,
        });
        dispatch({ type: 'SET_CART', cart: updated });
        dispatch({ type: 'SET_STATUS', status: 'idle', statusProductId: null });
      } catch {
        dispatch({
          type: 'SET_STATUS',
          status: 'error',
          statusProductId: productId,
        });
      }
    },
    [state.cart, state.cartId, createCart],
  );

  const updateToCartHandler = useCallback(
    async (productId: number, quantity: number) => {
      dispatch({
        type: 'SET_STATUS',
        status: 'updating',
        statusProductId: productId,
      });
      try {
        if (!state.cartId || !state.cart) {
          dispatch({
            type: 'SET_STATUS',
            status: 'idle',
            statusProductId: null,
          });
          return;
        }
        const updatedProducts = updateProductQuantity(
          state.cart.products,
          productId,
          quantity,
        );
        const updated = await updateToCart(state.cartId, {
          userId: state.cart.userId,
          date: new Date().toISOString(),
          products: updatedProducts,
        });
        dispatch({ type: 'SET_CART', cart: updated });
        dispatch({ type: 'SET_STATUS', status: 'idle', statusProductId: null });
      } catch {
        dispatch({
          type: 'SET_STATUS',
          status: 'error',
          statusProductId: productId,
        });
      }
    },
    [state.cart, state.cartId],
  );

  const removeToCartHandler = useCallback(
    async (productId: number) => {
      dispatch({
        type: 'SET_STATUS',
        status: 'removing',
        statusProductId: productId,
      });
      try {
        if (!state.cartId || !state.cart) {
          dispatch({
            type: 'SET_STATUS',
            status: 'idle',
            statusProductId: null,
          });
          return;
        }
        const updatedProducts = removeProductFromCart(
          state.cart.products,
          productId,
        );
        if (updatedProducts.length === 0) {
          await removeToCart(state.cartId);
          dispatch({ type: 'SET_CART', cart: null });
          dispatch({ type: 'SET_CART_ID', cartId: null });
          destroyCartIdCookie();
        } else {
          const updated = await updateToCart(state.cartId, {
            userId: state.cart.userId,
            date: new Date().toISOString(),
            products: updatedProducts,
          });
          dispatch({ type: 'SET_CART', cart: updated });
        }
        dispatch({ type: 'SET_STATUS', status: 'idle', statusProductId: null });
      } catch {
        dispatch({
          type: 'SET_STATUS',
          status: 'error',
          statusProductId: productId,
        });
      }
    },
    [state.cart, state.cartId],
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        cartId: state.cartId,
        cartProducts,
        addToCart: addToCartHandler,
        updateToCart: updateToCartHandler,
        removeToCart: removeToCartHandler,
        isLoading,
        status: state.status,
        statusProductId: state.statusProductId,
        totalCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart deve ser usado dentro de CartProvider');
  return ctx;
};
