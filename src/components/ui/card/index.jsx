import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data, href }) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `${href}`; 
    navigate(path);
  }
  return (
      <div onClick={routeChange} className="card">
        <div className="image">
          <img src="/images/Black3.png" alt="name" className="primary-image" />
        </div>
        <h2>{data.name}</h2>
        <div className="price">
          <h3>रु {data.price}</h3>
        </div>
      </div>
  );
};

export default Card;