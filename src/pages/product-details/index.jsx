import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./product-details.scss";
import FeatureProduct from "../../components/ui/feature";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/action/productAction";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { error, product, loading } = useSelector((state) => state.productDetail)

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [dispatch, id])

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
            <p>{product.category}</p>
            <h1>{product.name}</h1>
            <h4>रु {product.price}</h4>
            <select>
              <option>Select Size</option>
              <option>xxl</option>
              <option>xxl</option>
              <option>xxl</option>
              <option>xxl</option>
            </select>
            <input defaultValue={"1"} type="number" />
            <button disabled={false} className="btn">Add to cart</button>
            <h3>Product Details</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <FeatureProduct />
    </>
  );
};

export default ProductDetails;
