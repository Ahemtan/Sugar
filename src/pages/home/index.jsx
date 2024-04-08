import "./home.scss";
import FeatureProduct from "../../components/component/Feature";
import Latest from "../../components/component/Latest";
import Banner from "../../components/component/SaleBanner";
import { FaApple } from "react-icons/fa";
import { SiAdblock, SiAdidas, SiNike, SiPuma } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div
          style={{ backgroundImage: `url(/images/hero.png)` }}
          className="item"
        >
          <div className="content">
            <h1>
              This is <br /> a the hero
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              quasi magnam minima quod corrupti unde quam incidunt, sed, sunt
            </p>
            <button className="btn">Explore Now!</button>
          </div>
        </div>
      </div>

      <FeatureProduct type={"Feature"} />

      <div className="shop">
        <Latest />
      </div>

      <Banner />

      <div className="featured-brand">

        <div className="title-wrapper">
          <div className="title">
            <h1>Featured Brands</h1>
          </div>
        </div>

        <div className="brands">
          <div>
            <FaApple />
          </div>
          <div>
            <SiAdidas />
          </div>
          <div>
            <SiNike />
          </div>
          <div>
            <SiPuma />
          </div>
          <div>
            <SiAdblock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
