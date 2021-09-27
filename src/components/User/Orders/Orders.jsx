import Menu from "../../UI/Menu/Menu";
import SubScreenOrders from "../../UI/SubScreenOrders/SubScreenOrders";
import React, { useContext } from "react";
import StoreConstext from "../../Store/Context";

import "./Orders.scss";

const Orders = () => {
  const { statusMenu, setStatusMenu } = useContext(StoreConstext);



  
  return (
    <div className="Container-Page-Orders">
      <Menu />
      <SubScreenOrders/> 
    </div>
  );
};
export default Orders;
