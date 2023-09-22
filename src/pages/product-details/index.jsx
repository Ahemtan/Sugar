import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./product-details.scss";
import FeatureProduct from "../../components/ui/feature";
import { useEffect } from "react";
// import { getProductDetails } from "../../redux/action/productAction";

const ProductDetails = () => {
  // const { id } = useParams();

  // const dispatch = useDispatch()
  // const {} = useSelector(state=>state.productDetails)

  // useEffect(() => {
  //   dispatch(getProductDetails(id))
  // }, [dispatch])

  return (
    <>
      <div className="small-container single-product">
        <div className="product-row">
          <div className="col-2">
            <img src="/images/Black3.png" width="100%" alt="IMAGE" />
            <div className="img-row">
              <div className="img-col">
                <img src="/images/Black3.png" width="100%" alt="name" />
                <img src="/images/Black3.png" width="100%" alt="name" />
                <img src="/images/Black3.png" width="100%" alt="name" />
                <img src="/images/Black3.png" width="100%" alt="name" />
              </div>
            </div>
          </div>
          <div className="col-2">
            <p>Tshirt</p>
            <h1>NAME</h1>
            <h4>रु 24</h4>
            <select>
              <option>Select Size</option>
              <option>xxl</option>
              <option>xxl</option>
              <option>xxl</option>
              <option>xxl</option>
            </select>
            <input defaultValue={"1"} type="number" />
            <button className="btn">Add to cart</button>
            <h3>Product Details</h3>
            <p>desctra</p>
          </div>
        </div>
      </div>
      <FeatureProduct />
    </>
  );
};

export default ProductDetails;
