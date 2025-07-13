import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with primary style by default', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Primary');
    expect(btn.className).toMatch(/bg-primary/);
  });

  it('renders with secondary style', () => {
    render(<Button typeStyle="secondary">Secondary</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/bg-gray-100/);
  });

  it('renders with no style', () => {
    render(<Button typeStyle="none">None</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).not.toMatch(/bg-primary|bg-gray-100/);
  });

  it('is accessible and can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
  });
});
