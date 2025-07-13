import { ProductSchema, ProductsSchema } from './schema';

describe('ProductSchema', () => {
  it('should parse a valid product', () => {
    const product = {
      id: 1,
      title: 'Test Product',
      price: 10.5,
      description: 'A product',
      category: 'electronics',
      image: 'https://example.com/image.jpg',
      rating: { rate: 4.5, count: 100 },
    };
    expect(ProductSchema.parse(product)).toEqual(product);
  });

  it('should fail for missing required fields', () => {
    expect(() => ProductSchema.parse({})).toThrow();
  });

  it('should parse an array of products', () => {
    const products = [
      {
        id: 1,
        title: 'Test Product',
        price: 10.5,
        description: 'A product',
        category: 'electronics',
        image: 'https://example.com/image.jpg',
        rating: { rate: 4.5, count: 100 },
      },
    ];
    expect(ProductsSchema.parse(products)).toEqual(products);
  });
});
