import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '.';

// Garantir que o jest-dom está disponível
import '@testing-library/jest-dom';

describe('Header', () => {
  it('should render the store logo', () => {
    render(<Header cartCount={0} />);
    expect(screen.getByRole('link', { name: /ecommerce/i })).toBeInTheDocument();
  });

  it('should render the search input', () => {
    render(<Header cartCount={0} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('should render the cart icon with count', () => {
    render(<Header cartCount={3} />);
    expect(screen.getByLabelText(/cart/i)).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should render the menu button (hamburger) on mobile', () => {
    // Simular mobile
    global.innerWidth = 375;
    render(<Header cartCount={0} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
  });

  it('should show and hide the mobile menu when hamburger is clicked', () => {
    render(<Header cartCount={0} />);
    const menuButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).not.toHaveClass('hidden');
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toHaveClass('hidden');
  });

  it('should render the menu horizontally on desktop', () => {
    // Simular desktop
    global.innerWidth = 1280;
    render(<Header cartCount={0} />);
    expect(screen.getByRole('navigation')).toBeVisible();
  });

  it('should have accessible elements', () => {
    render(<Header cartCount={0} />);
    expect(screen.getByRole('link', { name: /ecommerce/i })).toHaveAttribute('tabindex');
    expect(screen.getByLabelText(/cart/i)).toHaveAttribute('tabindex');
    expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute('aria-label');
  });
}); 