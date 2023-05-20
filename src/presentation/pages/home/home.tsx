import { Navbar, ProductsCarousel, Features, Card } from "../../components";
import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ProductsCarousel />
      <Features />
      <Card />
    </div>
  );
};

export default Home;
