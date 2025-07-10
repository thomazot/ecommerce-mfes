import { ProductSchema } from "./product";

describe("ProductSchema", () => {
  it("should validates a valid product", () => {
    const produtoValido = {
      id: 1,
      title: "Camiseta",
      price: 99.9,
      description: "desc",
      category: "clothes",
      image: "https://site.com/img.jpg",
      rating: { rate: 4.5, count: 10 }
    };
    expect(ProductSchema.parse(produtoValido)).toEqual(produtoValido);
  });

  it("should throws error for invalid product", () => {
    const produtoInvalido = {
      id: "um",
      title: "Camiseta",
      price: "caro",
      description: "desc",
      category: "clothes",
      image: "img.jpg"
    };
    expect(() => ProductSchema.parse(produtoInvalido)).toThrow();
  });
}); 