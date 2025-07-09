import { render, screen } from '../test-utils';
import CheckoutPage from './page';
import * as cartLib from '../lib/cart';

describe('CheckoutPage', () => {
  it('should render checkout text and empty cart message', () => {
    render(<CheckoutPage />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument();
  });

  it('should render cart items when cart is not empty', () => {
    jest.spyOn(cartLib, 'getCart').mockReturnValue([
      {
        product: { id: '1', name: 'Test Product', description: '', price: 10, image: '', stock: 1 },
        quantity: 2,
      },
    ]);
    render(<CheckoutPage />);
    expect(screen.getByText('Test Product x 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Finalizar compra/i })).toBeInTheDocument();
  });
}); 