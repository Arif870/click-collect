import React from "react";
import "./Details.css";

const Details = props => {
  const products = props.cart;

  let totalprice = 0;
  let selectedProduct = [];
  for (let product of products) {
    totalprice = totalprice + product.price;
    selectedProduct.push(product.name);
  }

  return (
    <div className="details">
      <h1>Product Summary</h1>
      <h3>Total selected Product: {props.cart.length}</h3>
      <h3>
        Total amount: $<span>{totalprice}</span>
      </h3>
      {selectedProduct.map(product => (
        <span className="sproducts">{product}</span>
      ))}
      <button>Proceed to chackout</button>
    </div>
  );
};

export default Details;
