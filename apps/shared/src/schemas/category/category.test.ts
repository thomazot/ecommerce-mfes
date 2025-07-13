import { CategorySchema, CategoriesSchema } from './schema';

describe('CategorySchema', () => {
  it('should parse a valid category', () => {
    const category = 'electronics';
    expect(CategorySchema.parse(category)).toBe(category);
  });

  it('should fail for non-string', () => {
    expect(() => CategorySchema.parse(123)).toThrow();
  });

  it('should parse an array of categories', () => {
    const categories = ['electronics', 'jewelery'];
    expect(CategoriesSchema.parse(categories)).toEqual(categories);
  });
});
