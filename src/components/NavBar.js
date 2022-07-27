import { Link, NavLink } from "react-router-dom";
import cartImg from "../img/cart.png";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center p-8 bg-[#202425]">
      <h1 className="text-2xl text-[#e8e8e8] font-['Givonic'] tracking-widest">
        <Link to="/">
          TECHNO<span className="font-bold">LIFE</span>
        </Link>
      </h1>

      <ul className="flex items-center gap-8 text-lg">
        <li>
          <NavLink to="cart" className={`relative`}>
            <img
              src={cartImg}
              alt="Cart Icon"
              className="w-[40px] invert opacity-[0.9] relative"
            />

            {cartCount > 0 && (
              <div className="absolute rounded-full leading-5 px-2 pt-1.5 top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-technolife-blue text-white">
                {cartCount}
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
