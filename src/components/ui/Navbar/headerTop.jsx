import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="center container">
                <ul className="header-social-container">
                    <li>
                        <a href="#" className="social-link">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="social-link">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="social-link">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="social-link">
                            <FaTiktok />
                        </a>
                    </li>
                </ul>
                <div className="header-alert-news">
                    <p>
                        <b>Free Shipping</b>
                        This Week Order Over - $55
                    </p>
                </div>
            </div>
        </div>

    )
}

export default HeaderTop