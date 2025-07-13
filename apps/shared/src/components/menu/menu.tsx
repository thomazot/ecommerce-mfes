import React, { useState } from 'react';
import { menuItem } from './menu.variants';
import { Link } from '../../commons/link';
import { Button } from '../../commons/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const mockCategories = [
  'electronics',
  'jewelery',
  'men\'s clothing',
  'women\'s clothing',
];

export const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((v) => !v);
  const handleClose = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        className="sm:hidden ml-auto p-2"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={handleMenuToggle}
        tabIndex={0}
        typeStyle="none"
      >
        <Bars3Icon className="w-6 h-6" />
      </Button>

      {/* Overlay e menu mobile flutuante */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-40 sm:hidden transition-opacity duration-200"
            aria-hidden="true"
            onClick={handleClose}
            role="presentation"
          />
          {/* Menu flutuante */}
          <nav
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-4 sm:hidden transition-transform duration-300 ease-in-out transform translate-x-0"
            aria-label="Navegação principal"
            role="navigation"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="ml-auto mb-4 p-2"
              aria-label="Fechar menu"
              onClick={handleClose}
              typeStyle="none"
            >
              <XMarkIcon className="w-6 h-6" />
            </Button>
            <ul className="flex flex-col gap-2">
              {mockCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/?category=${encodeURIComponent(cat)}`}
                    className={menuItem()}
                    tabIndex={0}
                    aria-label={`Categoria: ${cat}`}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}

      {/* Menu desktop */}
      <nav
        className="hidden sm:flex"
        aria-label="Navegação principal"
        role="navigation"
      >
        {mockCategories.map((cat) => (
          <Link
            key={cat}
            href={`/?category=${encodeURIComponent(cat)}`}
            className={menuItem()}
            tabIndex={0}
            aria-label={`Categoria: ${cat}`}
          >
            {cat}
          </Link>
        ))}
      </nav>
    </>
  );
};
