'use client';

import { useCart } from '../../context/cart/cart';

export const CheckoutPage = () => {
  const { cart, cartProducts, isLoading } = useCart();

  if (isLoading) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  if (!cart || cart.products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Seu carrinho está vazio.
      </div>
    );
  }

  const items = cart.products;
  const total = items.reduce(
    (sum: number, item: { productId: number; quantity: number }) => {
      const prod = cartProducts[item.productId];
      return sum + (prod ? prod.price * item.quantity : 0);
    },
    0,
  );

  return (
    <section className="max-w-md sm:max-w-7xl mx-auto p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Meu Carrinho
      </h1>
      <ul
        className="divide-y divide-gray-200"
        role="list"
        aria-label="Itens do carrinho"
      >
        {items.map((item) => {
          const prod = cartProducts[item.productId];
          if (!prod) return null;
          return (
            <li
              key={item.productId}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-4"
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded mb-2 sm:mb-0"
              />
              <div className="flex-1 w-full text-center sm:text-left">
                <div className="font-semibold text-base sm:text-lg">
                  {prod.title}
                </div>
                <div className="text-gray-500 text-sm">
                  Qtd: {item.quantity}
                </div>
                <div className="text-gray-500 text-sm">
                  Preço unitário:{' '}
                  <span className="font-medium">
                    R$ {prod.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="font-bold text-lg sm:text-xl mt-2 sm:mt-0">
                R$ {(prod.price * item.quantity).toFixed(2)}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end mt-4 sm:mt-6">
        <span className="text-xl sm:text-2xl font-bold">
          Total: R$ {total.toFixed(2)}
        </span>
      </div>
    </section>
  );
};
