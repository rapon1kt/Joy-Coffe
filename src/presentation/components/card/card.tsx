import React from "react";
import "./card.css";
import { products } from "../../../data";

const Card: React.FC = () => {
  return (
    <section className="cards">
      <h1>
        <i className="fa-solid fa-store"></i> Nossos Produtos
      </h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="product-container" key={product.name + " key"}>
            <img src={product.src} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <h4 className="product-price">R$ {product.price},00</h4>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
