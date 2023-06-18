import React from "react";
import { products } from "../../../data";
import "./carousel.css";

const ProductsCarousel: React.FC = () => {
  const [product, setProduct] = React.useState(products[0]);
  const [currentProduct, setCurrentProduct] = React.useState<number>(
    products.values.length
  );

  const previousProduct = () => {
    if (currentProduct == 0) {
      setProduct(products[2]);
      setCurrentProduct(2);
    } else {
      setProduct(products[currentProduct - 1]);
      setCurrentProduct(currentProduct - 1);
    }
  };

  const nextProduct = () => {
    if (currentProduct == 2) {
      setProduct(products[0]);
      setCurrentProduct(0);
    } else {
      setProduct(products[currentProduct + 1]);
      setCurrentProduct(currentProduct + 1);
      console.log(currentProduct);
    }
  };

  return (
    <div className="carousel-products">
      <div className="carousel-container">
        <button onClick={() => previousProduct()}>{`<`}</button>
        <div className="carousel-product">
          <img src={product?.src} alt="produto" />
          <div className="carousel-product-text">
            <h2>{product?.name}</h2>
            <h3>{product?.description}</h3>
          </div>
        </div>
        <button onClick={() => nextProduct()}>{`>`}</button>
      </div>
    </div>
  );
};

export default ProductsCarousel;
