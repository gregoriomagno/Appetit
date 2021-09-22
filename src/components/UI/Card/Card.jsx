import React from "react";
import "./Card.scss";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const history = useHistory();
  // const order = new Order(props.item);

  function clickCard(item) {
    console.log("/pedidos/cliente");
    console.log("item: "+ props.item.clientName);
    return history.push("/pedidos/cliente", {client:props.item });
  }

  return (
    <button
      className="Container-card"
      onClick={() => {
        if (props.item !== null) {
          console.log("teste: "+ props.item);
          clickCard(props.item);
        }
      }}
    >
      <div className="Container-left">
        <img src={props.photo} alt="clientPhoto" className="Photo-client" />
        <div className="Column">
          <h6 className="Text-name-client">{props.title}</h6>
          <p className="Text-description-order">{props.subTitle}</p>
        </div>
      </div>
      <div className="Container-right">
        {props.value !== null && (
          <h6 className="Text-value-order">{props.value}</h6>
        )}
      </div>
    </button>
  );
};
export default Card;
