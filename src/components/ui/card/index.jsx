import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data, href }) => {

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `${href}`;
    navigate(path);
  }

  let sale_percentage;
  let discount

  if (data.previous_price) {

    //discount percentage calculation
    discount = data.previous_price - data.price
    sale_percentage = (discount / data.previous_price) * 100
    sale_percentage = Math.floor(sale_percentage)

    //make number 1 if number is less than 0
    if (sale_percentage < 1 && sale_percentage > 0) {
      sale_percentage = 1;
    } else if (sale_percentage <= 0) {
      sale_percentage = 1;
    }
    
  }

  return (
    <div onClick={routeChange} className="card">
      <div className="image-contain">
        <img width="540" height="720" src={`/${data.images[0].url}`} alt="" />
        <p>{data.previous_price ? `-${sale_percentage}%` : data.previous_price}</p>
      </div>
      <div className="price-contain">
        <p className="sale-price">{data.previous_price ? `रु${data.previous_price}` : data.previous_price}</p>
        <p className="price"> रु{data.price}</p>
      </div>
      <p className="name">{data.name}</p>
    </div>
  );
};

export default Card;