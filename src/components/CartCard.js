import star from "../img/products/eyes-star.png";

const CartCard = () => {
  const quantityClasses =
    "p-1 bg-gray-200 rounded-full hover:bg-technolife-blue hover:text-white";

  const minusSymbol = (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,13H5V11H19V13Z" />
    </svg>
  );

  const plusSymbol = (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );

  return (
    <div className="h-48 p-4 border border-gray-300 bg-white shrink-0 flex gap-4">
      <img src={star} alt="" className="h-full" />

      <div className="flex flex-col justify-center gap-4">
        <span className="text-2xl">Product Name</span>

        <div className="flex gap-12">
          <div className="flex items-center gap-4 select-none">
            <button className={quantityClasses}>{minusSymbol}</button>

            <span className="mt-1.5 min-w-[32px] text-center">Quantity</span>

            <button className={quantityClasses}>{plusSymbol}</button>
          </div>

          <div className="mt-1.5">Price</div>
        </div>

        <button className="self-start text-gray-300 hover:text-red-600">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
