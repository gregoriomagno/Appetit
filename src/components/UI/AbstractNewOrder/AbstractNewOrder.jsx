import React from "react";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import "./AbstractNewOrder.scss";
const AbstractNewOrder = () => {
    return (
        <div className="Container-products">
        <IconButtonbackPage />
        <div className="Container-title">
          <TitleSubScreen title="Novo pedido" />
        </div>
        <div className="Container-img-illustration">
          <img src={illustrationNewOrder} alt={"illustration"} />
        </div>
      </div>

    );
}
export default AbstractNewOrder;