import { useState } from "react";

const CartSidebar = ({ shippingCost, subtotal }) => {
  const [isExpress, setIsExpress] = useState(false);

  return (
    <div className="w-[650px] p-16 bg-[rgba(240,240,240,0.7)] backdrop-blur-xl flex flex-col gap-8 justify-center text-lg text-gray-600 cursor-default">
      <div className="flex justify-between text-2xl font-bold pb-2 border-b border-b-gray-400">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>

      <span>Shipping</span>

      <ul className="px-4">
        <li className="flex justify-between">
          <div>
            <input
              type="radio"
              name="shipping"
              id="expressShipping"
              onChange={(e) => setIsExpress(e.target.checked)}
            />
            <label className="ml-2" htmlFor="expressShipping">
              Express shipping
            </label>
          </div>

          <span>${shippingCost}</span>
        </li>
        <li className="flex justify-between">
          <div>
            <input
              type="radio"
              name="shipping"
              id="freeShipping"
              onChange={(e) => setIsExpress(!e.target.checked)}
            />
            <label className="ml-2 " htmlFor="freeShipping">
              Free shipping
            </label>
          </div>
        </li>
      </ul>

      <span className="text-sm">
        Shipping options will be update during checkout
      </span>

      <div className="flex justify-between text-2xl font-bold pb-2 border-b border-b-gray-400">
        <span>Total</span>
        <span className="text-technolife-blue">
          ${subtotal + (isExpress ? shippingCost : 0)}
        </span>
      </div>

      <button className="px-10 py-4 pt-6 text-2xl font-bold self-start text-white bg-black rounded-full hover:bg-technolife-blue">
        Checkout
      </button>
    </div>
  );
};

export default CartSidebar;
