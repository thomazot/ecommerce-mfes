import { Product } from "@shared/schemas";
import { getProducts } from "./product";

global.fetch = jest.fn();

describe("getProducts", () => {
  it("should returns products on success", async () => {
    const mockProducts: Product[] = [
      { id: 1, title: "Camiseta", price: 99.9, description: "desc", category: "clothes", image: "https://site.com/img.jpg" }
    ];
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => mockProducts });
    const products = await getProducts();
    expect(products).toEqual(mockProducts);
  });

  it("should throws error on failure", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(getProducts()).rejects.toThrow("Failed to fetch products");
  });
}); 