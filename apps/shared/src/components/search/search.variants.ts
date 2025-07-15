export const search = () => 'relative w-full max-w-full';

export const searchForm = () => 'flex w-full max-w-full';

export const searchInput = () =>
  'w-full max-w-full rounded-l-md border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm';

export const searchButton = () =>
  'rounded-r-md border-l-0 border border-gray-300 bg-primary text-white px-4 py-3 flex items-center justify-center sm:py-2';

export const searchDropdown = () =>
  'absolute z-10 mt-1 w-full max-w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto';

export const searchOption = (active: boolean) =>
  `px-4 py-3 cursor-pointer hover:bg-gray-100 text-sm sm:py-2${active ? ' bg-gray-100' : ''}`;
