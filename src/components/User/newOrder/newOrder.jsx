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

const NewOrder = () => {
  const { StatusNewOrder } = useContext(StoreConstext);
  const history = useHistory();

  return (
    <div className="Container-page">
      <Menu />

      <AbstractNewOrder order={StatusNewOrder.order} />

      <div className="Container-Column">
        <div className="bnt">
          <IconButtonbackPage
            onClick={() => {
              history.goBack();
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
