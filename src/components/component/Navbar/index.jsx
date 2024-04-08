import { FaCartPlus, FaHeart, FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.scss"
import HeaderTop from "./headerTop";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <HeaderTop />

      <div className="header-main">

        <div className="container">
          <NavLink to={"/"} className="header-logo">
            <img src="/images/Logo.png" alt="Sugar's logo" width={120} height={36} />
          </NavLink>
          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="header-user-actions">
            <button className="action-btn">
             <FaUser />
            </button>
            <button className="action-btn">
              <FaHeart />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <FaCartPlus />
              <span className="count">0</span>
            </button>
          </div>
        </div>

      </div>

      <DesktopNav />

      <MobileMenu />

    </header>
  );
};

export default Navbar;
