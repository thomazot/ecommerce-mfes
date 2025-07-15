import { tv } from 'tailwind-variants';

export const footer = tv({
  base: 'w-full bg-gray-100 border-t border-gray-200 text-gray-700 text-sm',
});

export const footerGrid = tv({
  base: 'max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8',
});

export const footerList = tv({
  base: 'flex flex-col gap-1',
});

export const footerSocialList = tv({
  base: 'flex gap-3',
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

export const footerAddress = tv({
  base: 'not-italic',
});

export const footerCopyright = tv({
  base: 'text-center py-4 border-t border-gray-200 text-xs text-gray-500',
});

export const footerRow = tv({
  base: 'flex items-center gap-2',
});
