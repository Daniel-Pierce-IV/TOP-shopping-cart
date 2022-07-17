import { Link } from "react-router-dom";
import svg from "./layered-steps-haikei.svg";

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: `url(${svg})` }} className="grow bg-cover">
      <div className="flex flex-col gap-6 w-1/3 min-w-[400px] ml-32 mt-32">
        <h2 className="text-4xl font-bold">This is our Store!</h2>

        <p className="text-2xl">
          Here is a descriptive paragraph about the store. We have many products
          that you're sure to love. Click the button below to browse our
          products!
        </p>

        <Link
          to="products"
          className="px-4 py-2 text-xl bg-black text-white self-end outline-black outline-offset-2 hover:outline hover:outline-1 active:outline-2"
        >
          Browse our products
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
