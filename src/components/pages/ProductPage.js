import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productCount } from "../../data/ProductData";
import getProduct from "../../helpers/getProduct";
import ChevronDown from "../ChevronDown";
import ChevronLeft from "../ChevronLeft";
import ChevronRight from "../ChevronRight";
import ChevronUp from "../ChevronUp";
import "./ProductPage.css";

const ProductPage = ({ setCartItem }) => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const product = getProduct(Number(id));

  const incrementQuantity = () => {
    setQuantity((qty) => qty + 1);
  };

  const nextProductId = () => {
    return product.id + 1 <= productCount ? product.id + 1 : 1;
  };

  const prevProductId = () => {
    return product.id - 1 >= 1 ? product.id - 1 : productCount;
  };

  const decrementQuantity = () => {
    setQuantity((qty) => (qty > 1 ? qty - 1 : 1));
  };

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  return (
    <div className="grow flex justify-center items-center p-24">
      {product ? (
        <div className="flex h-full w-full gap-16">
          <div
            style={{
              backgroundImage: `url(${product.image})`,
            }}
            className="grow relative bg-contain bg-no-repeat bg-right before-styling before:bg-technolife-blue"
          ></div>

          <div className="grow basis-0">
            <div className="w-[650px] h-full flex flex-col gap-6">
              <h2 className="text-8xl">{product.name}</h2>

              <h3 className=" text-technolife-blue text-3xl">
                US ${product.value}
              </h3>

              <div className="flex select-none">
                <div className="grow max-w-[230px] flex items-center border border-gray-300">
                  <span className="grow w-32 text-center text-lg whitespace-nowrap pt-2">
                    <span className="text-gray-500">Qty:</span> {quantity} pcs
                  </span>

                  <div className="flex flex-col justify-center self-stretch mr-4">
                    <ChevronUp
                      className="cursor-pointer h-2/5 text-gray-400 hover:text-technolife-blue"
                      onClick={incrementQuantity}
                    />
                    <ChevronDown
                      className="cursor-pointer h-2/5 text-gray-400 hover:text-technolife-blue"
                      onClick={decrementQuantity}
                    />
                  </div>
                </div>

                <button
                  className="grow max-w-[330px] py-6 pb-3 px-7 text-3xl bg-black text-white hover:bg-technolife-blue"
                  onClick={setCartItem.bind(null, product, quantity)}
                >
                  Add To Cart
                </button>
              </div>

              <div className="relative after:absolute after:-bottom-1 after:w-16 after:h-1 after:bg-technolife-blue"></div>

              <div className="grow flex justify-end items-end gap-4 select-none">
                <Link to={`/products/${prevProductId()}`}>
                  <ChevronLeft className="cursor-pointer w-7 text-gray-400 hover:text-technolife-blue" />
                </Link>

                <Link to={`/products/${nextProductId()}`}>
                  <ChevronRight className="cursor-pointer w-7 text-gray-400 hover:text-technolife-blue" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl">{"We couldn't find that product :("}</h2>
      )}
    </div>
  );
};

export default ProductPage;
