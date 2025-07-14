import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should have basic accessibility', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toHaveAccessibleName('');
  });
});
