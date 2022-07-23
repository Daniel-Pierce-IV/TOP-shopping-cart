import { Link } from "react-router-dom";
import heartImg from "../../img/cyber-heart.png";
import SlideButton from "../SlideButton";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heartImg})` }}
      className="grow flex justify-end bg-no-repeat bg-left bg-[length:50%]"
    >
      <div className="w-1/2 flex items-center">
        <div className="flex flex-col gap-4 min-w-[400px]">
          <h2 className="text-4xl tracking-widest text-gray-500">
            Make your body limitless
          </h2>

          <Link to="products" className="self-center">
            <SlideButton
              overText="Discover"
              overColorClass="bg-technolife-blue"
              underText="Our Products"
              underColorClass="bg-gray-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
