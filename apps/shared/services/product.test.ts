import { Product } from "../schemas";
import { getProductByCategory, getProductById, getProducts } from "./product";

global.fetch = jest.fn();

describe("product", () => {
  describe('getProducts',() => {
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
  })

  describe('getProductById', () => {
    it("should returns products on success", async () => {
      const mockProducts: Product = { id: 1, title: "Camiseta", price: 99.9, description: "desc", category: "clothes", image: "https://site.com/img.jpg" };
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => mockProducts });
      const products = await getProductById(1);
      expect(products).toEqual(mockProducts);
    });

    it("should throws error on failure", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
      await expect(getProductById(1)).rejects.toThrow("Failed to fetch product");
    });
  })

  describe('getProductByCategory', () => {
    it("should returns products on success", async () => {
      const mockProducts: Product[] = [{ id: 1, title: "Camiseta", price: 99.9, description: "desc", category: "clothes", image: "https://site.com/img.jpg" }];
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: true, json: async () => mockProducts });
      const products = await getProductByCategory('category');
      expect(products).toEqual(mockProducts);
    });

    it("should throws error on failure", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
      await expect(getProductByCategory('category')).rejects.toThrow("Failed to fetch products");
    });
  })
}); 