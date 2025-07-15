import { Cart } from '../../schemas/cart';

export type CartStatus = 'idle' | 'adding' | 'updating' | 'removing' | 'error';

export interface CartState {
  cart: Cart | null;
  cartId: number | null;
  status: CartStatus;
  statusProductId: number | null;
}

export const initialState: CartState = {
  cart: null,
  cartId: null,
  status: 'idle',
  statusProductId: null,
};

export type CartAction =
  | { type: 'SET_CART'; cart: Cart | null }
  | { type: 'SET_CART_ID'; cartId: number | null }
  | { type: 'SET_STATUS'; status: CartStatus; statusProductId: number | null }
  | { type: 'RESET' };

const handlers = {
  SET_CART: (
    state: CartState,
    action: Extract<CartAction, { type: 'SET_CART' }>,
  ) => ({ ...state, cart: action.cart }),
  SET_CART_ID: (
    state: CartState,
    action: Extract<CartAction, { type: 'SET_CART_ID' }>,
  ) => ({ ...state, cartId: action.cartId }),
  SET_STATUS: (
    state: CartState,
    action: Extract<CartAction, { type: 'SET_STATUS' }>,
  ) => ({
    ...state,
    status: action.status,
    statusProductId: action.statusProductId,
  }),
  RESET: () => initialState,
};

type HandlerType = <T extends CartAction>(
  state: CartState,
  action: T,
) => CartState;

export function cartReducer(state: CartState, action: CartAction): CartState {
  const handler = handlers[action.type] as HandlerType | undefined;
  return handler ? handler(state, action) : state;
}
