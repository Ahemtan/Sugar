import Card from "../card";
import "./feature.scss";
import { getProduct } from "../../../redux/action/productAction";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardSkeleton from "../skeleton/card-skeleton";

const FeatureProduct = ({ type }) => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  if (error) {
    toast.error(error, { toastId: '_error', });
  }
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className="feature-section">
        <div className="top">
          <h1>{type} Product</h1>
        </div>
        <div className="bottom">
          {loading ? (
            <CardSkeleton card={4} />
          ) : (
            <>
              {products ? (
                products.map((product) => (
                  <Card key={product._id} href={`/products/${product._id}`} data={product} />
                ))
              ) : (
                <h1>NO PRODUCT FOUND</h1>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
