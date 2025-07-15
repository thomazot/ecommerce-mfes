import { tv } from 'tailwind-variants';

export const menu = tv({
  base: 'flex items-center gap-4',
  variants: {
    open: {
      true: 'block',
      false: 'hidden sm:flex',
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const menuItem = tv({
  base: 'px-2 py-1 rounded hover:bg-gray-100 focus:bg-gray-200',
});

export const menuOverlay = tv({
  base: 'fixed inset-0 bg-black bg-opacity-90 z-40 sm:hidden transition-opacity duration-200',
});

export const menuNavMobile = tv({
  base: 'fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-4 sm:hidden transition-transform duration-300 ease-in-out transform translate-x-0',
});

export const menuNavDesktop = tv({
  base: 'hidden sm:flex',
});

export const menuListMobile = tv({
  base: 'flex flex-col gap-2',
});

export const menuButtonMobile = tv({
  base: 'sm:hidden ml-auto p-2',
});

export const menuButtonClose = tv({
  base: 'ml-auto mb-4 p-2',
});

export const cart = tv({
  base: 'relative flex items-center',
});

export const cartIcon = tv({
  base: 'w-6 h-6',
});
