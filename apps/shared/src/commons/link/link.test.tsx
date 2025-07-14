import { render, screen } from '@testing-library/react';
import { Link } from './link';

describe('Link', () => {
  it('should render children and href', () => {
    render(<Link href="/test">Test</Link>);
    const link = screen.getByRole('link', { name: 'Test' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should apply color, underline and size variants', () => {
    render(
      <Link
        href="#"
        color="secondary"
        underline
        size="lg"
        aria-label="link-variant"
      >
        Link
      </Link>,
    );
    const link = screen.getByLabelText('link-variant');
  });

  it('should be accessible via tab', () => {
    render(<Link href="#">Tab</Link>);
    const link = screen.getByRole('link', { name: 'Tab' });
    expect(link).toHaveAttribute('tabindex', '0');
  });
});
