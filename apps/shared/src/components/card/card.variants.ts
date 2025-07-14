import { tv } from 'tailwind-variants';

export const card = tv({
  slots: {
    base: 'px-4 py-4 w-60 border border-gray-200 rounded flex flex-col gap-4 sm:hover:shadow transition flex-[1_1_250px] min-w-[250px] max-w-full',
    image: 'w-full h-[150px] contain object-contain',
    title: 'font-bold text-base/tight',
    price: '',
  },
});
