import { render, screen } from '../test-utils';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('should render the layout with Providers and children', () => {
    render(
      <RootLayout>
        <div data-testid="content">Test content</div>
      </RootLayout>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
}); 