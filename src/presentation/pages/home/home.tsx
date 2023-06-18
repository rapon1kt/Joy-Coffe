import {
  Navbar,
  ProductsCarousel,
  Features,
  Card,
  Location,
  Team,
  Footer,
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
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
