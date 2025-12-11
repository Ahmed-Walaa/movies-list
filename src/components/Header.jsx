import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header h-[60px] items-center py-3 px-5 md:px-10 bg-[#262626] border-b-2 border-primary">
      <div className="container-header  mx-auto flex justify-between items-center">
        <div className="logo">
          <Link
            to="/"
            className="font-bold text-xl text-white hover:text-(--primary) transition"
          >
            Movies
          </Link>
        </div>
        <ul className="links flex items-center gap-5 md:gap-7">
          <li>
            <NavLink
              to="/"
              className="font-semibold text-white hover:text-(--primary) transition"
            >
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Wathched"
              className="font-semibold text-white hover:text-(--primary) transition"
            >
              Watched
            </NavLink>
          </li>

          <li className="btn-contanier">
            <NavLink to="/add" className="btn hover:opacity-90 transition">
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
