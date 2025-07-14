import { tv } from 'tailwind-variants';

export const header = tv({
  base: 'w-full bg-white shadow-md',
});

export const container = tv({
  base: 'max-w-7xl flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-4 mx-auto',
  variants: {
    minimal: {
      true: 'justify-center',
    },
  },
});
