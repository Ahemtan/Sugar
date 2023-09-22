import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((item, i) => (
      <div key={i} className="card">
        <div className="image">
          <Skeleton className="image" />
        </div>
        <h3>
          <Skeleton />
        </h3>
        <Skeleton style={{ width: 70 }} className="price" />
      </div>
    ));
};

export default CardSkeleton;
