import { Navbar, ProductsCarousel } from "../../components";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <ProductsCarousel />
    </div>
  );
};

export default Home;
