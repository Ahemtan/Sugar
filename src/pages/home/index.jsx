import { Link } from "react-router-dom";
import "./home.scss";
import FeatureProduct from "../../components/ui/feature";

const Home = () => {
  return (
    <>
      <div className="row">
        <h1>Hero</h1>
      </div>
      <FeatureProduct type={"Feature"} />
    </>
  );
};

export default Home;