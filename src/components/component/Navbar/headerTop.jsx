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
                        <b>Free Shipping!</b>‎ 
                        This Week Order Over - <span className='primary'>रू5,500</span> 
                    </p>
                </div>

                <div className="header-top-actions">
                    <select name="currency">
                        <option value="nrp">NRP रू</option>
                    </select>
                    <select name="language">
                        <option value="en-US">English</option>
                    </select>
                </div>

            </div>
        </div>

    )
}

export default HeaderTop