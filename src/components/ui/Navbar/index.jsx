import { FaHeart, FaPersonBooth, FaPhone, FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.scss"
import HeaderTop from "./headerTop";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  return (
    <header>
      <HeaderTop />

      <div className="header-main">

        <div className="container">

          <a href="/" className="header-logo">
            <img src="/images/Logo.png" alt="" width={150} height={36} />
          </a>

          <div className="header-search-container">

            <input type="search" name="search" placeholder="Enter Product Name" className="search-field" />

            <button className="search-btn">

              <FaSearch />

            </button>

          </div>

          <div className="header-user-action">

            <button className="action-btn">
              <FaUser />
            </button>
            

            <button className="action-btn">
              <FaHeart />
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <FaPhone />
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
