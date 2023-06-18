import React from "react";
import "./location.css";

const Location: React.FC = () => {
  const images = [
    {
      src: "assets/loja1.jpg",
    },
    {
      src: "assets/loja2.jpg",
    },
  ];

  const [image, setImage] = React.useState(images[0]);
  const [currentImage, setCurrentImage] = React.useState<number>(
    images.values.length
  );

  const previousImage = () => {
    if (currentImage == 0) {
      setImage(images[2]);
      setCurrentImage(2);
    } else {
      setImage(images[currentImage - 1]);
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage == 1) {
      setImage(images[0]);
      setCurrentImage(0);
    } else {
      setImage(images[currentImage + 1]);
      setCurrentImage(currentImage + 1);
      console.log(currentImage);
    }
  };

  return (
    <div className="location-container">
      <div className="location-description">
        <h1 className="location-title">
          <i className="fa-solid fa-location-dot"></i> Localização
        </h1>
        <p className="location-text">
          Av. Pres. Tancredo de Almeida Neves, 45 - São Judas Tadeu, Itajubá -
          MG, 37504-066
        </p>
      </div>
      <div className="location-images">
        <p className="images-text">
          *Imagens do exterior e interior da nossa cafeteria, respectivamente.
        </p>
        <div className="images">
          <img src="assets/loja2.jpg" alt="foto da loja" />
          <img src="assets/loja1.jpg" alt="foto da loja" />
        </div>
      </div>
      <div className="carousel-location">
        <div className="carousel-location-container">
          <button onClick={() => previousImage()}>{`<`}</button>
          <img src={image?.src} alt="produto" />
          <button onClick={() => nextImage()}>{`>`}</button>
        </div>
      </div>
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
          <a>
            <i className="fa-solid fa-copy"></i> Copiar endereço
          </a>
        </button>
      </div>
    </div>
  );
};

export default Location;
