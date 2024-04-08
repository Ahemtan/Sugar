import { useState } from 'react'
import { FaBars, FaBoxes, FaHeart, FaHome, FaTruck, FaTimes, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Submenu from './submenu';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {

    const [openmenu, setOpenmenu] = useState(false)

    const toggleMenu = () => {
        setOpenmenu(!openmenu)
    }

    const menuData = [
        {
            "title": "men's",
            "childrens": [
                {
                    "title": "shirt",
                    "href": "shirt"
                }
            ]
        },
        {
            "title": "women's",
            "childrens": [
                {
                    "title": "shirt",
                    "href": "shirt"
                }
            ]
        },
        {
            "title": "electronic",
            "childrens": [
                {
                    "title": "laptop",
                    "href": "laptop"
                }
            ]
        },
        {
            "title": "idk",
            "childrens": [
                {
                    "title": "idk",
                    "href": "shirt"
                }, {
                    "title": "idk",
                    "href": "shirt"
                }
            ]
        },
    ]

    return (
        <>

            {/* button navigation */}
            <div className="mobile-button-navigation">

                <button onClick={toggleMenu} className="action-btn">
                    <FaBars />
                </button>

                <button className="action-btn">
                    <FaHeart />
                    <span className="count">0</span>
                </button>

                <a href='/' className='action-btn'>
                    <FaHome />
                </a>

                <button className='action-btn'>
                    <FaBoxes />
                </button>

                <button className='action-btn'>
                    <FaTruck />
                </button>

            </div>

            {/* mobile menu */}
            <div className={openmenu ? "mobile-navigation-menu has-scrollbar active" : "mobile-navigation-menu has-scrollbar"}>

                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>

                    <button onClick={toggleMenu} className="menu-close-btn">
                        <FaTimes />
                    </button>
                </div>

                <ul className="mobile-menu-category-list">

                    <li className="menu-category">
                        <NavLink className="menu-title" to={'/'}>Home</NavLink>
                    </li>

                    {
                        menuData.map((item, index) => {
                            return <Submenu key={index} item={item} />;
                        })
                    }

                </ul>

                <div className="menu-bottom">

                    <ul className="menu-social-container">

                        <li>
                            <a href="" className="social-link">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="" className="social-link">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="" className="social-link">
                                <FaTwitter />
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </>
    )
}

export default MobileMenu