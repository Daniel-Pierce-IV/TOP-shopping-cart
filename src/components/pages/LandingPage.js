import { Link } from "react-router-dom";
import heartImg from "../../img/cyber-heart.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heartImg})` }}
      className="grow flex justify-end bg-no-repeat bg-left bg-[length:50%]"
    >
      <div className="w-1/2 flex items-center">
        <div className="flex flex-col gap-4 min-w-[400px]">
          <h2 className="text-4xl tracking-widest">Make your body limitless</h2>

          <Link
            to="products"
            className={`button px-5 pt-1.5 relative text-xl rounded-full self-center tracking-widest`}
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
