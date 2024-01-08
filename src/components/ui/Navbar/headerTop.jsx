import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                
                <ul className="header-social-container">
                    <li>
                        <a href="" className="social-link">
                            <FaFacebook/>
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

                <div className="header-aleart-popup">
                    <p>
                        <b>Free Shipping</b>
                        This Week over - 1500
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop