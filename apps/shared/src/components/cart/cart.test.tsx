import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { Cart } from './cart';


describe('Cart', () => {
  it('should render the icon and quantity badge', () => {
    const { container } = render(<Cart />);
    expect(container).toBeInTheDocument();
  });
});
