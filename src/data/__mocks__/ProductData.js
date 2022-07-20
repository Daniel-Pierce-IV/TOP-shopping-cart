import ProductFactory from "../../factories/ProductFactory";

const productData = [
  ProductFactory("Product 1", 10),
  ProductFactory("Product 2", 20, Symbol.for("SOMETHING")),
];

export default productData;
