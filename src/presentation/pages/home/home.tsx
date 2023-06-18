import {
  Navbar,
  ProductsCarousel,
  Features,
  Card,
  Location,
  Creators,
} from "../../components";
import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ProductsCarousel />
      <Features />
      <Card />
      <Location />
      <Creators />
    </div>
  );
};

export default Home;
