import React from "react";
import "./features.css";

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <h1>Nossas vantagens!</h1>
      <div className="features">
        <div className="feature">
          <i className="icon fa-solid fa-circle-check fa-4x"></i>
          <h3>Preço acessível</h3>
          <p>
            Na nossa cafeteria ler e tomar um bom café sai com o melhor preço!
          </p>
        </div>
        <div className="feature">
          <i className="icon fa-solid fa-bullseye fa-4x"></i>
          <h3>Ambiente</h3>
          <p>Temos o ambiente ideal para você e seus livros!</p>
        </div>
        <div className="feature">
          <i className="icon fa-solid fa-heart fa-4x"></i>
          <h3>Variedade na leitura</h3>
          <p>
            Caso não tenha livros possuimos os clássicos em nossa cafeteria!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
