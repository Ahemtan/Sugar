import { Link } from "react-router-dom";
import "./home.scss";
import FeatureProduct from "../../components/ui/feature";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="/images/Black3.png" alt="Hero" />
        </div>
        <div className="col-2">
          <h1>Design Made For You!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
            Vitae voluptates dolorum quaerat incidunt veniam sunt
          </p>
          <Link className="btn" to={"/products"}>
            Explore Now!
          </Link>
        </div>
      </div>
      <FeatureProduct type={"Feature"} />
    </>
  );
};

export default Home;