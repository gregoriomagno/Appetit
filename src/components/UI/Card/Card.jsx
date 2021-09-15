import React from "react";
import "./Card.scss";
import { useHistory } from "react-router-dom";
import Order from "../../../models/Order"
const Card = ({ item }) => {
  const history = useHistory();
  const order = new Order(item);



function clickCard(item){
  console.log("/pedidos/cliente")
    return history.push("/pedidos/cliente",item);
}



  return (
    <button className="Container-card" onClick={()=>{clickCard(item)}}>
      <div className="Container-left">
        <img
          src={item.client.clientPhoto}
          alt="clientPhoto"
          className="Photo-client"
        />
        <div className="Column">
          <h6 className="Text-name-client">{order.client.clientName}</h6>
          <caption className="Text-description-order">{order.getDescription()}</caption>
        </div>
      </div>
      <div className="Container-right">
          <h6 className="Text-value-order">
              R$: {order.getTotal().toLocaleString('pt-br', {minimumFractionDigits: 2})}
          </h6>
      </div>
    </button>
  );
};
export default Card;
