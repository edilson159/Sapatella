import "./CardVitriniProducts1.css";
import React from "react";

const CardVitriniProducts1 = (props) => {
  return (
    <div className="container-card-vitrini-products-1">
      <div className="container-card-vitrini-products-1-title">
        <h2>{props.title}</h2>
      </div>
      <div className="container-card-vitrini-products-1-p1">
        <div className="container-card-vitrini-products-1-discount">
          <p>{props.discount}</p>
        </div>
        <img src={props.heartIcon} alt="Icone de um coração" />
      </div>
      <img
        className="container-card-vitrini-products-1-img"
        src={props.image}
        alt="Imagem do produto"
      />
      1
      <div className="container-card-vitrini-products-1-description">
        <div className="container-card-vitrini-products-1-description-name">
          <p>{props.name}</p>
          <div className="container-card-vitrini-products-1-description-price">
            <p>{props.currentPrice}</p>

            <p>{props.oldPrice}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardVitriniProducts1;
