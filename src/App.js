import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";

const App = () => {
  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <Header />
      <Banner />
      <Shop />
    </div>
  );
};

export default App;
