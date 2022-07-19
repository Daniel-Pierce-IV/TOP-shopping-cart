const ProductFactory = (name, value, ...filters) => {
  return {
    name,
    value,
    filters,
  };
};

export default ProductFactory;
