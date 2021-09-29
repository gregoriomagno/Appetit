import React from "react";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import { useHistory } from "react-router-dom";
import CardNewOrder from "../CardNewOrder/CardNewOrder";
import "./AbstractNewOrder.scss";
import Order from "../../../models/Order";
import { useContext } from "react";
import StoreConstext from "../../Store/Context";

const AbstractNewOrder = ({ order }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);

  const objOrder = new Order({
    id: order.id,
    client: null,
    products: order.itens,
    date: order.date,
    status: order.status,
  });

  const history = useHistory();

  return (
    <div className="Abstract-New-Order-Column-Page">
      <div className="Container-products">
        <IconButtonbackPage
          onClick={() => {
            setStatusNewOrder({
              progress: "1",
              order: new Order({
                id: -1,
                client: null,
                products: [],
                date: "",
                status: "open",
              }),
              clients: null,
            });
            history.goBack();
          }}
        />

        <div className="Container-title">
          <TitleSubScreen title="Novo pedido" />
        </div>

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
        {StatusNewOrder.clients !== null && (
          <>
            <h4 className="Abstract-New-Order-Text-Title"> Cliente </h4>
            {StatusNewOrder.clients.map((client) => (
              <>
                <CardNewOrder
                  key={null}
                  item={null}
                  title={client.clientName}
                  photo={client.clientPhoto}
                  subTitle={" "}
                  onClick={null}
                />
                <hr className="New-Order-Step-Two-Divider-Card-Person" />
              </>
            ))}
          </>
        )}
      </div>
      {order.itens.length === 0 && (
        <div className="Container-img-illustration">
          <img
            src={illustrationNewOrder}
            alt={"illustration"}
            className="img-illustration"
          />
        </div>
      )}
      {order.itens.length !== 0 && (
        <>
          <hr className="New-Order-Step-Two-Divider-Total" />
          <div className="New-Order-Step-Two-Divider-Total-Row">
            <p>Total</p>
            <p className="New-Order-Step-Two-Text-Value">
              R${" "}
              {objOrder.getTotal().toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default AbstractNewOrder;
