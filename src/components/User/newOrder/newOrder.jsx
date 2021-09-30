import Menu from "../../UI/Menu/Menu";
import React, { useContext } from "react";

import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";
import { useHistory } from "react-router-dom";

import "./newOrder.scss";

import StoreConstext from "../../Store/Context";
import AbstractNewOrder from "../../UI/AbstractNewOrder/AbstractNewOrder";
import NewOrderStepOne from "../../UI/NewOrderStepOne/NewOrderStepOne";
import NewOrderStepTwo from "../../UI/NewOrderStepTwo/NewOrderStepTwo";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import Order from "../../../models/Order";

const NewOrder = () => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);
  const history = useHistory();

  return (
    <div className="Container-page">
      <Menu />

      <AbstractNewOrder order={StatusNewOrder.order} />

      <div className="Container-Column">
        <div className="bnt">
          
          <IconButtonbackPage
            onClick={() => {
              if (StatusNewOrder.progress === "1") {
                history.push("/pedidos");
              }
              
              if (StatusNewOrder.progress === "2") {
                setStatusNewOrder({
                  progress: "1", order: new Order({
                    id: StatusNewOrder.order.key,
                    client: null,
                    products: StatusNewOrder.order.itens,
                    date: StatusNewOrder.order.date,
                    status: "open",
                  }),
                })

              }


            }}
          />
        </div>
        <div className="Container-user-header">
          <UserHeaderPhoto />
        </div>
        {StatusNewOrder.progress === "1" && (
          <NewOrderStepOne status={StatusNewOrder} />
        )}
        {StatusNewOrder.progress === "2" && (
          <NewOrderStepTwo status={StatusNewOrder} />
        )}
      </div>
    </div>
  );
};
export default NewOrder;
