import Card from "../../ui/Card/index.jsx"
import { Link } from 'react-router-dom'
import "./featureProduct.scss"
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { getProduct } from "../../../redux/action/productAction.js";
import { useSelector, useDispatch } from "react-redux";

const Latest = () => {

  const dispatch = useDispatch();

  const { error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);

  return (

    <div className="contianer">
      <div className="title-wrapper">
        <div className="title">
          <h1>Latest Products</h1>
        </div>
        <div className="btn-link">
          <Link to="/shop">View All <FaArrowRight /> </Link>
        </div>
      </div>
      <div className="has-scrollbar">
        {products &&
          products.map((product) => {
            return (
              <div key={product._id} className="scrollbar-item">
                <Card data={product} href={`/product/${product._id}`} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Latest