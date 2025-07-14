import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Card } from './card';
import { Product } from '../../schemas/products';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock('../../commons/link', () => ({
  __esModule: true,
  Link: () => <div />,
}));

const productMock: Product = {
  id: 1,
  category: 'category',
  description: 'description',
  image: 'image',
  price: 1.0,
  rating: {
    count: 1,
    rate: 2,
  },
  title: 'title',
};

describe('Card', () => {
  it('should render', () => {
    const { container } = render(<Card {...productMock} />);
    expect(container).toBeInTheDocument();
  });
});
