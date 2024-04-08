import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./product-details.scss";
import { useEffect } from "react";
import { getProductDetails } from "../../redux/action/productAction";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorPage from "../error";
import Latest from "../../components/component/Latest";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { error, product, loading } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  if (error) {
    return (
      <ErrorPage code={"500"} messgae={"Someting went worng!"} />
    );
  } else {
    return (
      <>
        {loading ? (
          error
        ) : (
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
                <p>{product.category || <Skeleton width={50} />}</p>
                <h1>{product.name || <Skeleton width={100} />}</h1>
                <h4>रु{product.price || <Skeleton width={80} />}</h4>
                <select>
                  <option>Select Size</option>
                  <option>xxl</option>
                  <option>xxl</option>
                  <option>xxl</option>
                  <option>xxl</option>
                </select>
                <input defaultValue={"1"} type="number" />
                <button disabled={false} className="btn">
                  Add to cart
                </button>
                <h3>Product Details</h3>
                <p>{product.description || <Skeleton />}</p>
              </div>
            </div>
          </div>
        )}
        <Latest />
      </>
    );
  }
};

export default ProductDetails;
