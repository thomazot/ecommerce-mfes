import React, { useState } from 'react';
import {
  menuItem,
  menuOverlay,
  menuNavMobile,
  menuNavDesktop,
  menuListMobile,
  menuButtonMobile,
  menuButtonClose,
} from './menu.variants';
import { Link } from '../../commons/link';
import { Button } from '../../commons/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useBase } from '../../context/base';

export const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { menu } = useBase();
  const handleMenuToggle = () => setMenuOpen((v) => !v);
  const handleClose = () => setMenuOpen(false);
  const linkCategory = (cat: string) => `/category/${encodeURIComponent(cat)}`;

  return (
    <>
      {/* Mobile menu button */}
      <Button
        className={menuButtonMobile()}
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
            className={menuOverlay()}
            aria-hidden="true"
            onClick={handleClose}
            role="presentation"
          />
          {/* Menu flutuante */}
          <nav
            className={menuNavMobile()}
            aria-label="Navegação principal"
            role="navigation"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className={menuButtonClose()}
              aria-label="Fechar menu"
              onClick={handleClose}
              typeStyle="none"
            >
              <XMarkIcon className="w-6 h-6" />
            </Button>
            <ul className={menuListMobile()}>
              {menu?.map((cat) => (
                <li key={cat}>
                  <Link
                    href={linkCategory(cat)}
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
        className={menuNavDesktop()}
        aria-label="Navegação principal"
        role="navigation"
      >
        {menu?.map((cat) => (
          <Link
            key={cat}
            href={linkCategory(cat)}
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
