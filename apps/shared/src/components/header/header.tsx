'use client';

import { useState } from 'react';
import { Logo } from '../logo';
import { Search } from '../search';
import { Menu } from '../menu';
import { Cart } from '../cart';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { container } from './header.variants';

export const Header = ({ minimal }: { minimal?: boolean }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleOpenSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);

  return (
    <header className="w-full bg-white shadow-md" role="banner">
      <div className={container({ minimal })}>
        {/* Logo */}
        <Logo size="sm" className="sm:text-lg" />

        {/* Mobile: ícones à direita */}
        <div className="flex items-center gap-2 sm:hidden ml-auto">
          <button
            aria-label="Buscar"
            onClick={handleOpenSearch}
            className="p-2"
            tabIndex={0}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
          <Menu />
          <Cart />
        </div>

        {/* Desktop: busca, menu, carrinho */}
        {!minimal && (
          <div className="hidden sm:flex items-center gap-4 flex-1 justify-end">
            <Search className="max-w-xs w-full" />
            <Menu />
            <Cart />
          </div>
        )}
      </div>

      {/* Overlay de busca mobile */}
      {showSearch && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center"
          onClick={handleCloseSearch}
        >
          <div
            className="w-full max-w-sm mt-8 bg-white rounded shadow p-4 flex gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Search className="w-full" />
            <button
              aria-label="Fechar busca"
              onClick={handleCloseSearch}
              className="ml-2 p-2"
              tabIndex={0}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
