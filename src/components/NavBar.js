import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClasses = "underline";
  const applyActiveClasses = ({ isActive }) => isActive && activeClasses;

  return (
    <nav className="flex justify-between p-8 bg-orange-400">
      <h1 className="text-4xl">
        <Link to="/">Title</Link>
      </h1>

      <ul className="flex items-center gap-8 text-lg">
        <li>
          <NavLink to="products" className={applyActiveClasses}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="cart" className={applyActiveClasses}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
