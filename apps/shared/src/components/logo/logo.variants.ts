import { tv } from 'tailwind-variants';

export const logo = tv({
  base: 'flex items-center gap-2 font-bold text-lg select-none',
  variants: {
    color: {
      default: 'text-primary',
      dark: 'text-white',
      light: 'text-gray-900',
    },
    size: {
      md: 'text-lg',
      lg: 'text-2xl',
      sm: 'text-base',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});
