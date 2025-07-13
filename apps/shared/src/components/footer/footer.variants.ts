import { tv } from 'tailwind-variants';

export const footer = tv({
  base: 'w-full bg-gray-100 border-t border-gray-200 text-gray-700 text-sm',
});

export const footerSection = tv({
  base: 'flex flex-col gap-2',
});

export const footerTitle = tv({
  base: 'font-semibold text-base mb-1',
});

export const footerLink = tv({
  base: 'hover:underline focus:underline outline-none',
});
