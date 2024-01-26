import { Link } from "react-router-dom";
import "./home.scss";
import FeatureProduct from "../../components/ui/feature";

const Home = () => {
return (
<>
  <div className="hero">
    <div style={{ backgroundImage: `url(/images/hero.png)`}} className="item">
      <div className="content">
        <h1>This is <br /> a the hero</h1>
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
    
  </div>
</>
);
};

export default Home;