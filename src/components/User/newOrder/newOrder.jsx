import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useHistory } from "react-router-dom";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
import "./newOrder.scss";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";

const NewOrder = () => {
  return (
    <div className="Container-page">
      <Menu />
      <div className="Container-row">

        <div className="Container-products">
          <IconButtonbackPage />
          <div className="Container-title">
            <TitleSubScreen title="Novo pedido" />
          </div>

          <img
            src={illustrationNewOrder}
            alt={"illustration"}
            className="Container-img-illustration"
          />
        </div>
       
        <div className="Container-Column">
          <div className="Container-user-header">
            <UserHeaderPhoto />
          </div>

          <div className="Container-inf-order">
            <TitleSubScreen title="Informações para o pedido" />
            <p className="subtitle-inf-order">Preencha as informações abaixo para concluir esta venda.</p>
            <div className="Container-steps">
              <p className="Text-title-steps"> Passo 1 de 3 </p>
              <div className="Container-progress-steps">
                <div className="Container-progress">
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
