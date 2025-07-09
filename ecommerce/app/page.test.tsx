import { render, screen } from '../test-utils';
import HomePage from './page';

describe('HomePage', () => {
  it('should render product names in pt-BR', () => {
    render(<HomePage />);
    expect(screen.getByText('Produtos em destaque')).toBeInTheDocument();
    expect(screen.getByText('Camiseta Básica')).toBeInTheDocument();
    expect(screen.getByText('Tênis Esportivo')).toBeInTheDocument();
  });
}); 