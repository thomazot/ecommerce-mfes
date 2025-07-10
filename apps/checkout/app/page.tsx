
export default function CheckoutPage() {
  const cart = [];
  return (
    <main className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 && (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) }
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" tabIndex={0} aria-label="Finalizar compra">
        Finalizar compra
      </button>
    </main>
  );
}
