import { render, screen } from '../test-utils';
import CheckoutPage from './page';

describe('CheckoutPage', () => {
  it('should render pt-BR checkout text', () => {
    render(<CheckoutPage />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument();
  });
}); 