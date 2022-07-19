const ProductCard = ({ name, value }) => {
  return (
    <div className="bg-red-300 aspect-square">
      <h3 className="text-2xl">{name}</h3>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default ProductCard;
