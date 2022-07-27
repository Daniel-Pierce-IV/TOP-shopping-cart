import { Link } from "react-router-dom";
import backgroundImg from "../../img/products/backgrounds/eyes-background.png";
import CartCard from "../CartCard";
import CartSidebar from "../CartSidebar";
import GrowingScroller from "../GrowingScroller";

const CartPage = () => {
  const shippingCost = 50;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center right -275px",
      }}
      className="grow flex bg-no-repeat"
    >
      <div className="grow p-16 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="text-6xl">Cart (itemCount)</div>

          <Link
            to={"/products"}
            className="py-1 pt-3 px-4 border border-gray-400 rounded-full self-center hover:bg-technolife-blue hover:text-white"
          >
            Go back to shopping
          </Link>
        </div>

        <GrowingScroller showScroll={false}>
          <div className="flex flex-col gap-4">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </GrowingScroller>

        <div className="flex gap-2 pt-2">
          <input
            className="w-1/3 py-2.5 pt-4 px-3 border border-gray-300 text-gray-600 rounded-full"
            type="text"
            placeholder="Coupon Code"
          />

          <button className="py-1 pt-2.5 px-7 rounded-full bg-gray-100 text-gray-500">
            Update Cart
          </button>
        </div>
      </div>

      <CartSidebar shippingCost={shippingCost} />
    </div>
  );
};

export default CartPage;
