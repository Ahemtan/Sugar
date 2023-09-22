import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    const offestY = window.scrollY
    if (offestY >= 80) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  
  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed)
  }, [])

  const links = [
    {
      name : 'Home',
      href: ''
    },
    {
      name : 'Product',
      href: 'products'
    },
    {
      name : 'Catalog',
      href: 'catalog'
    },
    {
      name : 'About',
      href: 'about'
    },
    {
      name : 'Contact',
      href: 'contact'
    }
  ]

  return (
    <div className={fix ? `navbar stickey` : `navbar`}>
      <div className="navbar-content">
        <Link to={"/"} className="left"><img src="/images/Logo.png" alt="LOGO"/></Link>

        <div style={{ left : toggle ? '0' : '-200%'}} className="center">
          {
            links.map((link) => (
              <NavLink
                to={`/${link.href}`}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                key={link.href}
              >
                {link.name}
              </NavLink>
            ))
          }
        </div>

        <div className="right">
            <span className="bars" onClick={handleToggle}>{ toggle ? <FaTimes /> : <FaBars /> }</span>
            <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;