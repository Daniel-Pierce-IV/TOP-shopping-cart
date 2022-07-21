import { Link, NavLink } from "react-router-dom";
import cartImg from "../img/cart.png";

const NavBar = () => {
  const activeClasses = "underline";
  const applyActiveClasses = ({ isActive }) => isActive && activeClasses;

  return (
    <nav className="flex justify-between items-center p-8 bg-[#202425]">
      <h1 className="text-2xl text-[#e8e8e8] font-['Givonic'] tracking-widest">
        <Link to="/">
          TECHNO<span className="font-bold">LIFE</span>
        </Link>
      </h1>

      <ul className="flex items-center gap-8 text-lg">
        <li>
          <NavLink to="cart" className={applyActiveClasses}>
            <img
              src={cartImg}
              alt="Cart Icon"
              className="w-[40px] invert opacity-[0.9]"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
