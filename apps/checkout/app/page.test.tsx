import { render, screen } from '../test-utils';

describe('CheckoutPage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should render checkout text and empty cart message', () => {
    jest.doMock('../lib/cart', () => ({
      getCart: () => [],
    }));
    const CheckoutPage = require('./page').default;
    render(<CheckoutPage />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument();
  });

  it('should render cart items when cart is not empty', () => {
    jest.doMock('../lib/cart', () => ({
      getCart: () => [
        {
          product: { id: '1', name: 'Test Product', description: '', price: 10, image: '', stock: 1 },
          quantity: 2,
        },
      ],
    }));
    const CheckoutPage = require('./page').default;
    render(<CheckoutPage />);
    const item = screen.getByText((content, node) => {
      if (!node) return false;
      return node.tagName.toLowerCase() === 'li' &&
        !!node.textContent && node.textContent.replace(/\s+/g, ' ').includes('Test Product x 2');
    });
    expect(item).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Finalizar compra/i })).toBeInTheDocument();
  });
}); 