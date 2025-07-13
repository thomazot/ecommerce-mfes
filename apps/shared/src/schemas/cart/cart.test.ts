import { CartSchema, CartsSchema } from './schema';

describe('CartSchema', () => {
  it('should parse a valid cart', () => {
    const cart = {
      id: 1,
      userId: 2,
      date: '2024-07-13',
      products: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 },
      ],
    };
    expect(CartSchema.parse(cart)).toEqual(cart);
  });

  it('should fail for missing required fields', () => {
    expect(() => CartSchema.parse({})).toThrow();
  });

  it('should parse an array of carts', () => {
    const carts = [
      {
        id: 1,
        userId: 2,
        date: '2024-07-13',
        products: [{ productId: 1, quantity: 2 }],
      },
    ];
    expect(CartsSchema.parse(carts)).toEqual(carts);
  });
});
