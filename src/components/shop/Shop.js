import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Details from "../details/Details";
import Products from "../products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // add to cart event handalar

  const handleCart = product => {
    let newCart = [...cart, product];
    setCart(newCart);
  };

  // cart icon design
  const cartIcon = (
    <FontAwesomeIcon
      icon={faShoppingCart}
      style={{ fontSize: "30px", marginLeft: "20px" }}
    />
  );
  return (
    <div className="shop">
      <div className="search">
        <h1>Search you products</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input placeholder="Search products" type="text" />
          {cartIcon}
          <span>{cart.length}</span>
        </div>
      </div>

      <div className="shop-childs">
        <div className="products">
          {products.map(product => (
            <Products
              handleCart={handleCart}
              key={product._id}
              product={product}
            />
          ))}
        </div>

        <Details cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
