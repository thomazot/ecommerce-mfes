import { tv } from 'tailwind-variants';

export const card = tv({
  slots: {
    base: 'px-4 py-4 max-w-60 border border-gray-200 rounded flex flex-col gap-4 sm:hover:shadow transition',
    image: 'w-full h-[150px] contain object-contain',
    title: 'font-bold text-base/tight',
    price: '',
  },
});
