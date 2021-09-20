import Menu from "../../UI/Menu/Menu";
import React, { useState, useContext } from "react";


import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";



import "./newOrder.scss";

import StoreConstext from "../../Store/Context";
import AbstractNewOrder from "../../UI/AbstractNewOrder/AbstractNewOrder";
import NewOrderStepOne from "../../UI/NewOrderStepOne/NewOrderStepOne";
import NewOrderStepTwo from "../../UI/NewOrderStepTwo/NewOrderStepTwo";


const NewOrder = () => {
  const { StatusNewOrder } = useContext(StoreConstext);



  return (
    <div className="Container-page">
      <Menu />
      <AbstractNewOrder cart={StatusNewOrder.cart}/>
      <div className="Container-row">
        <div className="Container-Column">
          <div className="Container-user-header">
            <UserHeaderPhoto />
          </div>
          {StatusNewOrder.progress === "1" && (
            <NewOrderStepOne status={StatusNewOrder} />
          )}
          {StatusNewOrder.progress === "2" && (
            <div></div>
            // <NewOrderStepTwo status={StatusNewOrder} />
          )}
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
