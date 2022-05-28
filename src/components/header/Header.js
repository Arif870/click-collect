import React from "react";
import "./Header.css";
import logo from "../../images/click&collect-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img style={{ width: "150px" }} src={logo} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./shop">Shop</a>
          </li>
          <li>
            <a href="./about">About us</a>
          </li>
          <li>
            <a href="./policy">Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
