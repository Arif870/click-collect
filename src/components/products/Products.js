import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";

const Products = props => {
  const { name, img, price, rating, category } = props.product;

  return (
    <div className="product">
      <div className="product-image">
        <img src={img} alt="" />
        <span>{category}</span>
      </div>

      <div className="p-content">
        <h2>{name}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-15px",
            fontSize: "20px",
          }}
        >
          <p>
            Price: $<span>{price}</span>
          </p>
          <p>Rating: {rating}</p>
        </div>
        <button onClick={() => props.handleCart(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
