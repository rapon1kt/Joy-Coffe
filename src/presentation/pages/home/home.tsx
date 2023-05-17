import { Navbar, ProductsCarousel } from "../../components";
import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ProductsCarousel />
    </div>
  );
};

export default Home;
