let count = 1;

const ProductFactory = (name, tagline, value, image, ...filters) => {
  return {
    id: count++,
    name,
    value,
    tagline,
    image,
    filters,
  };
};

export default ProductFactory;
