import { useParams } from "react-router-dom";
import getProduct from "../../helpers/getProduct";

const ProductPage = () => {
  const { id } = useParams();
  const product = getProduct(Number(id));

  return (
    <div className="grow">
      {product ? (
        <h2 className="text-3xl">{product.name}</h2>
      ) : (
        <h2 className="text-3xl">{"We couldn't find that product :("}</h2>
      )}
    </div>
  );
};

export default ProductPage;
