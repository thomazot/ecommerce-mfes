import { render, screen } from '@testing-library/react';
import { Logo } from './logo';

describe('Logo', () => {
  it('should render with text and icon', () => {
    render(<Logo />);
    expect(screen.getByLabelText('Home')).toBeInTheDocument();
    expect(screen.getByText('Ecommerce')).toBeInTheDocument();
    expect(screen.getByText('🛒')).toBeInTheDocument();
  });

  it('should accept color and size props', () => {
    render(<Logo color="dark" size="lg" aria-label="Logo dark" />);
    const logo = screen.getByLabelText('Logo dark');
    expect(logo).toHaveClass('text-white');
    expect(logo).toHaveClass('text-2xl');
  });

  it('should accept extra className', () => {
    render(<Logo className="underline" aria-label="Logo underline" />);
    expect(screen.getByLabelText('Logo underline')).toHaveClass('underline');
  });
});
