import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Showcase } from './showcase';

jest.mock('../card', () => ({
  __esModule: true,
  Card: () => <div />,
}));

describe('Showcase', () => {
  it('should render', () => {
    const { container } = render(<Showcase title="title" products={[]} />);
    expect(container).toBeInTheDocument();
  });
});
