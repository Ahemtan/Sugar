import './footer.scss'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
            <div className="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Services</Link></li>
                    <li><Link to={"/"}>Privacy Policy</Link></li>
                    <li><Link to={"/"}>Affilate Program</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Category</h4>
                <ul>
                    <li><Link to={"/category/mens"}>{"Men's"}</Link></li>
                    <li><Link to={"/category/women"}>{"Women's"}</Link></li>
                    <li><Link to={"/category/mens"}>{"Electronic"}</Link></li>
                    <li><Link to={"/category/mens"}>{"Cloting"}</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><Link to={"/"}>{"Help"}</Link></li>
                    <li><Link to={"/"}>{"Contact"}</Link></li>
                    <li><Link to={"/"}>{"Report"}</Link></li>
                    <li><Link to={"/"}>{"FAQ"}</Link></li>
                    <li><Link to={"/"}>{"Order Status"}</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><Link to={"/"}>{"Help"}</Link></li>
                    <li><Link to={"/"}>{"Contact"}</Link></li>
                    <li><Link to={"/"}>{"Report"}</Link></li>
                    <li><Link to={"/"}>{"FAQ"}</Link></li>
                    <li><Link to={"/"}>{"Order Status"}</Link></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer