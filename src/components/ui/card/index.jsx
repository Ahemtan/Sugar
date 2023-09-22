import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ data }) => {
  return (
    <Link to={`/products/${data._id}`}>
      <div className="card">
        <div className="image">
          <img src="/images/Black3.png" alt="name" className="primary-image" />
        </div>
        <h2>{data.name}</h2>
        <div className="price">
          <h3>रु {data.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;