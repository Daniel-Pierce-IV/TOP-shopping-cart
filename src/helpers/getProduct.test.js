import productData from "../data/ProductData";
import getProduct from "./getProduct";

jest.mock("../data/ProductData");

describe("getProduct()", () => {
  it("returns the product with matching id", () => {
    productData.forEach((product) => {
      expect(getProduct(product.id)).toBe(product);
    });
  });
});
