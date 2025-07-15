import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cart } from './cart.variants';
import { CartListContent } from '../cartListContent/cartListContent';
import { useCart } from '../../context/cart';

export const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const S = cart();
  const { totalCartItems } = useCart();

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <button
        className={S.button()}
        aria-label="Abrir carrinho"
        onClick={() => setOpen(true)}
      >
        <ShoppingCartIcon className={S.icon()} />
        <span
          className={S.badge()}
          aria-label={`Itens no carrinho: ${totalCartItems}`}
        >
          {totalCartItems}
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className={S.overlay()}
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar do carrinho */}
      <aside
        className={[
          S.sidebar(),
          open ? S.sidebarOpen() : S.sidebarClosed(),
        ].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho"
        tabIndex={-1}
      >
        <div className={S.header()}>
          <h2 className={S.title()} id="cart-title">
            Meu Carrinho
          </h2>
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label="Fechar carrinho"
            className={S.closeButton()}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Conteúdo do carrinho */}
        <div className={S.content()}>
          <CartListContent />
        </div>
      </aside>
    </>
  );
};
