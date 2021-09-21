import React from "react";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import { useHistory } from "react-router-dom";
import CardNewOrder from "../CardNewOrder/CardNewOrder";
import "./AbstractNewOrder.scss";

const AbstractNewOrder = ({ order }) => {
  const history = useHistory();
  return (
    <div className="Container-products">
      <IconButtonbackPage onClick={() => history.goBack()} />
      <div className="Container-title">
        <TitleSubScreen title="Novo pedido" />
      </div>
      {console.log("produtos: " + order.itens)}
      {order.itens.length === 0 && (
        <div className="Container-img-illustration">
          <img src={illustrationNewOrder} alt={"illustration"} />
        </div>
      )}

      {order.itens.length !== 0 && (
        <div>

          <h4 className="Abstract-New-Order-Text-Title"> Produtos </h4>
          {order.itens.map(function (item) {
            return (
              <div key={item.product.id}>
              <CardNewOrder
                key={item.product.id}
                item={null}
                title={item.qnt + "x " + item.product.title}
                photo={item.product.photo}
                subTitle={" "}
                onClick={null}
                value={
                  "R$: " +
                  (item.product.price * item.qnt).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })
                }
              />
              </div>
            );
          })}
        </div>
      )}
      {order.client !== null && (
        <>
          <h4 className="Abstract-New-Order-Text-Title"> Cliente </h4>
  
                <CardNewOrder
                  key={null}
                  item={null}
                  title={order.client.clientName}
                  photo={order.client.clientPhoto}
                  subTitle={" "}
                  onClick={null}

                />
                <hr className="New-Order-Step-Two-Divider-Card-Person" />
              
          
          

        </>
      )}

    </div>
  );
};
export default AbstractNewOrder;
