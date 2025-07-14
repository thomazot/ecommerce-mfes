import React from 'react';
import { cart, cartIcon, cartBadge } from './cart.variants';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from '../../commons/link';

const mockCount = 2;

export const Cart: React.FC = () => (
  <Link
    href="/checkout"
    className={cart()}
    aria-label="Shopping cart"
    tabIndex={0}
  >
    <ShoppingCartIcon className={cartIcon()} />
    <span className={cartBadge()} aria-label={`${mockCount} items in cart`}>
      {mockCount}
    </span>
  </Link>
);
