import "./saleBanner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div style={{ backgroundImage: `url(/images/background.png)`}} className="container">
        <div className="col-2">
          <img src="/images/Black3.png" className="offer-image" alt="SALE" />
        </div>
        <div className="col-2 text-container">
          <p>Exclusive Sale on Store.</p>
          <h1>Mega Sale!</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            eligendi exercitationem, nam modi sint qui eum ea ratione animi
            corporis est voluptatibus beatae explicabo sed earum facere amet
            consequatur error.
          </span>
          <button className="btn">Buy Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
