import { tv } from 'tailwind-variants';

export const cart = tv({
  base: 'relative flex items-center',
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-xl',
      lg: 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const cartIcon = tv({
  base: 'w-6 h-6',
});

export const cartBadge = tv({
  base: 'absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full px-2 py-0.5',
});
