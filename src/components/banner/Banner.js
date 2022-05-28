import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_left">
        <p>Summer sell</p>
        <h1>
          upto <span>70%</span>
        </h1>
        <p>Collect your offer using promo code</p>
        <h3>ASEDGF</h3>
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/wCwbhBz/4.jpg"
          alt="products"
        />
      </div>
    </div>
  );
};

export default Banner;
