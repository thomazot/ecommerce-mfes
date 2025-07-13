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

export const cart = tv({
  base: 'relative flex items-center',
});

export const cartIcon = tv({
  base: 'w-6 h-6',
});
