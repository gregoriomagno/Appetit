import React from "react";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import { useHistory } from "react-router-dom";

import "./AbstractNewOrder.scss";
import CardFood from "../CardFood/CardFood";
const AbstractNewOrder = ({ order }) => {
  const history = useHistory();
  return (
    <div className="Container-products">
      <IconButtonbackPage onClick={() => history.goBack()} />
      <div className="Container-title">
        <TitleSubScreen title="Novo pedido" />
      </div>
    
      {order.itens.length === 0 && (
        <div className="Container-img-illustration">
          <img src={illustrationNewOrder} alt={"illustration"} />
        </div>
      )}

      {order.itens.length !== 0 && (
        <div>
          <h4 className="Abstract-New-Order-Text-Title-Products"> Produtos </h4>
          {order.itens.map(function (item) {
            return (
              <CardFood
                    key={item.product.id}
                    item={null}
                    title={item.qnt+"x "+ item.product.title}
                    photo={item.product.photo}
                    subTitle={" "}
                    onClick={null}
                    value={
                      "R$: " +
                      (item.product.price*item.qnt).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })
                    }
                  />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AbstractNewOrder;
