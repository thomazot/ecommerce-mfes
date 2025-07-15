import { tv } from 'tailwind-variants';

export const cartListContent = tv({
  slots: {
    section: 'max-w-md mx-auto p-2',
    list: 'divide-y divide-gray-200',
    item: 'flex items-center gap-4 py-4',
    image: 'w-16 h-16 object-contain rounded',
    info: 'flex-1',
    title: 'font-semibold',
    quantity: 'text-gray-500 text-sm',
    price: 'text-gray-500 text-sm',
    subtotal: 'font-bold text-lg',
    totalWrapper: 'flex justify-end mt-4',
    total: 'text-xl font-bold',
    button:
      'w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
    empty: 'text-center py-8 text-gray-500',
    loading: 'text-center py-8',
    removeButton: 'ml-2 text-red-500 hover:underline',
    quantityInput: 'ml-2 w-16 border rounded px-2 py-1 text-center',
  },
});
