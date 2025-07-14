import { tv } from 'tailwind-variants';

export const cart = tv({
  slots: {
    button:
      'fixed bottom-4 right-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 sm:bottom-8 sm:right-8',
    badge: 'absolute top-2 right-2 bg-red-500 text-xs rounded-full px-2 py-0.5',
    overlay: 'fixed inset-0 z-50 bg-black opacity-50 transition-opacity',
    sidebar:
      'fixed top-0 right-0 z-50 h-full w-full max-w-xs sm:max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
    sidebarOpen: 'translate-x-0',
    sidebarClosed: 'translate-x-full',
    header: 'flex items-center justify-between p-4 border-b',
    title: 'text-lg font-bold',
    closeButton:
      'p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400',
    content: 'p-4',
    icon: 'w-7 h-7',
  },
});
