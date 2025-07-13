import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './menu';

describe('Menu', () => {
  it('renderiza categorias no desktop', () => {
    render(<Menu />);
    // Simula desktop
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    const navs = screen.getAllByRole('navigation', {
      name: /navegação principal/i,
    });
    expect(navs.length).toBeGreaterThan(0);
    expect(screen.getByText('electronics')).toBeInTheDocument();
  });
});
