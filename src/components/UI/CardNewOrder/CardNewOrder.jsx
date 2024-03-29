import React from "react";
import "./CardNewOrder.scss";

const CardNewOrder = (props) => {
  return (
    <button className="Container-card-new-order" onClick={props.onClick}>
      <div className="Container-card-food-row-left">
        <img src={props.photo} alt={props.photo} className="Photo" />
        <div className="Column-card-new-order">
          <div className="Container-card-food-row">
            <div className="Container-column-title-subtitle">
              <h6 className="Text-card-food">{props.title}</h6>
              <p className="Text-subtitle">{props.subTitle}</p>
            </div>
            {props.value !== null && (
              <h6 className="Text-card-food">{props.value}</h6>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};
export default CardNewOrder;
