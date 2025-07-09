import { getCart } from '../lib/cart';

export default function CheckoutPage() {
  const cart = getCart();
  return (
    <main className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.product.id} className="mb-2">
              {item.product.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" tabIndex={0} aria-label="Finalizar compra">
        Finalizar compra
      </button>
    </main>
  );
}
