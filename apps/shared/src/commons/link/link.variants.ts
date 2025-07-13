import { tv } from 'tailwind-variants';

export const link = tv({
  base: 'transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
  variants: {
    color: {
      primary: 'text-primary hover:underline',
      secondary: 'text-gray-700 hover:text-primary',
      inherit: 'text-inherit',
    },
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
