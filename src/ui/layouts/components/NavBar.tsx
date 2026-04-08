import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="text-xl">Kaiser</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/booking">Servicios</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
