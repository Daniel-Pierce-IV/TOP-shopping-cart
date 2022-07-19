import Filter from "../enums/Filter";
import ProductFactory from "../factories/ProductFactory";

const productData = [
  ProductFactory("X", 100, Filter.X),
  ProductFactory("Y", 200, Filter.Y),
  ProductFactory("XY", 400, Filter.X, Filter.Y),
  ProductFactory("Z", 1000, Filter.Z),
];

export default productData;
