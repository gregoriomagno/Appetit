import React from "react";
import IconArrowBack from "../../../assets/Home/ArrowBack.svg";
import "./NewOrder.scss";


const NewOrder = (props) => {
    return (
        <div className="Container-open-orders">
        <img src={IconArrowBack} alt="Icon" className="Container-icon-back" />

        <div className="Container-new-orders">
          <h3 className="Text-new-order"> Novo pedido</h3>
          <h4 className="Text-total"> Total</h4>
        </div>
      </div>  
    );
}
export default NewOrder;