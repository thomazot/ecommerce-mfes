import { tv } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
  variants: {
    type: {
      primary: 'bg-primary text-white hover:bg-primary/90',
      secondary:
        'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200',
      none: '',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    type: 'primary',
    disabled: false,
  },
});
