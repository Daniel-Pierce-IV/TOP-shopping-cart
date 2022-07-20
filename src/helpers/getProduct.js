import productData from "../data/ProductData";

export default function getProduct(id) {
  return productData.find((e) => e.id === id);
}
