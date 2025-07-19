import React from 'react';
import { useRouter } from 'next/navigation';
import { cartListContent } from './cartListContent.variants';
import { useCart } from '../../context/cart/cart';

export const CartListContent: React.FC = () => {
  const { cart, cartProducts, updateToCart, removeToCart, isLoading } =
    useCart();
  const router = useRouter();
  const S = cartListContent();

  if (isLoading) {
    return <div className={S.loading()}>Carregando...</div>;
  }

  if (!cart || cart.products.length === 0) {
    return <div className={S.empty()}>Seu carrinho está vazio.</div>;
  }

  const items = cart.products;
  const total = items.reduce(
    (sum: number, item: { productId: number; quantity: number }) => {
      const prod = cartProducts[item.productId];
      return sum + (prod ? prod.price * item.quantity : 0);
    },
    0,
  );

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <section className={S.section()}>
      <ul className={S.list()} role="list" aria-label="Itens do carrinho">
        {items.map((item: { productId: number; quantity: number }) => {
          const prod = cartProducts[item.productId];
          return (
            <li key={item.productId} className={S.item()}>
              {prod ? (
                <>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className={S.image()}
                  />
                  <div className={S.info()}>
                    <div className={S.title()}>{prod.title}</div>
                    <div className={S.quantity()}>
                      Qtd:
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => {
                          void updateToCart(
                            item.productId,
                            Number(e.target.value),
                          );
                        }}
                        className={S.quantityInput()}
                        aria-label="Alterar quantidade"
                      />
                    </div>
                    <div className={S.price()}>
                      Preço unitário:{' '}
                      <span className="font-medium">
                        R$ {prod.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className={S.subtotal()}>
                    R$ {(prod.price * item.quantity).toFixed(2)}
                  </div>
                </>
              ) : (
                <div className={S.info()}>
                  <div className={S.title()}>
                    Produto #{item.productId} não encontrado
                  </div>
                </div>
              )}
              <button
                className={S.removeButton()}
                onClick={() => {
                  void removeToCart(item.productId);
                }}
                aria-label="Remover item"
              >
                Remover
              </button>
            </li>
          );
        })}
      </ul>
      <div className={S.totalWrapper()}>
        <span className={S.total()}>Total: R$ {total.toFixed(2)}</span>
      </div>
      <button
        className={S.button()}
        onClick={handleCheckout}
        aria-label="Fechar pedido"
      >
        Fechar pedido
      </button>
    </section>
  );
};
