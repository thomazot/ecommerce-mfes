import { tv } from 'tailwind-variants';

export const search = tv({
  base: 'flex items-center w-full max-w-md',
});

export const searchInput = tv({
  base: 'flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary',
});
