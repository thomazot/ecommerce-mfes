import { tv } from 'tailwind-variants';

export const link = tv({
  base: 'transition-colors focus:outline-none text-current',
  variants: {
    underline: {
      true: 'underline',
      false: 'no-underline',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    underline: false,
    size: 'md',
  },
});
