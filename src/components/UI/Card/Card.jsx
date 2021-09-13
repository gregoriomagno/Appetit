import React from "react";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="Container-card">
      <div className="Container-left">
        <img
          src={item.client.clientPhoto}
          alt="clientPhoto"
          className="Photo-client"
        />
        <div className="Column">
          <h6 className="Text-name-client">{item.client.clientName}</h6>
          <caption className="Text-description-order">{item.description}</caption>
        </div>
      </div>
      <div className="Container-right">
          <h6 className="Text-value-order">
              R$:{item.price}
          </h6>
      </div>
    </div>
  );
};
export default Card;
