import React from "react";
import "./location.css";

const Location: React.FC = () => {
  return (
    <div className="location-container">
      <div className="location-images">
        <div className="images">
          <img src="assets/loja2.jpg" alt="foto da loja" />
          <img src="assets/loja1.jpg" alt="foto da loja" />
        </div>
        <p className="images-text">
          Imagens do exterior e interior da nossa cafeteria, respectivamente.
        </p>
      </div>
      <div className="location-description">
        <h1 className="location-title">
          <i className="fa-solid fa-location-dot"></i> Localização
        </h1>
        <p className="location-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          integer eget aliquet nibh praesent tristique magna sit amet. Lobortis
          scelerisque fermentum dui faucibus in ornare quam. Adipiscing diam
          donec adipiscing tristique risus nec feugiat. Ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam. Id eu nisl nunc mi ipsum
          faucibus vitae aliquet. Viverra accumsan in nisl nisi scelerisque eu.
          Penatibus et magnis dis parturient montes. Scelerisque fermentum dui
          faucibus in ornare quam viverra orci. Viverra adipiscing at in tellus
          integer feugiat. Purus sit amet volutpat consequat mauris nunc congue
          nisi.
        </p>
        <div className="location-buttons">
          <button className="location-maps">
            <a href="https://goo.gl/maps/YDNDEXuMc7RJ16cJ7">
              <i className="fa-solid fa-map-location"></i> Ver no mapa
            </a>
          </button>
          <button
            className="location-copy"
            onClick={() => {
              navigator.clipboard.writeText(
                "Av. Pres. Tancredo de Almeida Neves, 45 - São Judas Tadeu, Itajubá - MG, 37504-066"
              );
              alert("Endereço copiado com sucesso!");
            }}
          >
            <i className="fa-solid fa-copy"></i> Copiar endereço
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
