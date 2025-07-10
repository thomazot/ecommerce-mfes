import { CategorySchema, CategoriesSchema, getCategories } from "./category";

describe("CategorySchema", () => {
  it("validates a valid category", () => {
    expect(CategorySchema.parse("electronics")).toBe("electronics");
    expect(CategorySchema.parse("jewelery")).toBe("jewelery");
    expect(CategorySchema.parse("men's clothing")).toBe("men's clothing");
    expect(CategorySchema.parse("women's clothing")).toBe("women's clothing");
  });

  it("throws error for invalid category", () => {
    expect(() => CategorySchema.parse("food")).toThrow();
    expect(() => CategorySchema.parse(123 as unknown)).toThrow();
    expect(() => CategorySchema.parse("")).toThrow();
  });
});

describe("CategoriesSchema", () => {
  it("validates an array of valid categories", () => {
    const categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
    ];
    expect(CategoriesSchema.parse(categories)).toEqual(categories);
  });

  it("throws error if array contains invalid category", () => {
    const categories = ["electronics", "food"];
    expect(() => CategoriesSchema.parse(categories)).toThrow();
  });
});

describe("getCategories", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("returns valid categories from API", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ]
    });
    const categories = await getCategories();
    expect(categories).toEqual([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
    ]);
  });

  it("throws error if API returns not ok status", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(getCategories()).rejects.toThrow("Erro ao buscar categorias");
  });

  it("throws error if API response is invalid", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ["electronics", "food"]
    });
    await expect(getCategories()).rejects.toThrow();
  });
}); 