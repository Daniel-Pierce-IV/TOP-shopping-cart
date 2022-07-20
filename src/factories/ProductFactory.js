let count = 1;

const ProductFactory = (name, value, ...filters) => {
  return {
    id: count++,
    name,
    value,
    filters,
  };
};

export default ProductFactory;
