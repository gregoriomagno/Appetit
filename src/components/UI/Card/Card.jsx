import React from "react";
import "./Card.scss";


const Card = ({ item }) => {

function getTotal(products){
  return  products.reduce((a,b)=>a+ b.product.price * b.amount,0 );
}
function getDescription(products){
  
  
  var textDescription = products.reduce((a,b)=>a +" "+b.amount+"x " +b.product.title+",","" );
  
  return textDescription.substring(0,textDescription.length-1)+".";
}



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
          <caption className="Text-description-order">{getDescription(item.products)}</caption>
        </div>
      </div>
      <div className="Container-right">
          <h6 className="Text-value-order">
              R$: {getTotal(item.products).toLocaleString('pt-br', {minimumFractionDigits: 2})}
          </h6>
      </div>
    </div>
  );
};
export default Card;
