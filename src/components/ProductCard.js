import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, tagline }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="rounded-[54px] overflow-hidden text-white w-[350px] aspect-[3/4]"
    >
      <div className="flex flex-col items-center gap-3 w-full h-full backdrop-blur-xl bg-[rgba(100,100,100,0.5)] hover:bg-[rgba(150,150,150,0.5)]">
        <img src={image} alt="" className="h-[70%]" />

        <div className="p-2 pt-0">
          <h3 className="text-4xl text-center">{name}</h3>
          <p className="text-2xl text-center">{tagline}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
