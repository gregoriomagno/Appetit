import Menu from "../../UI/Menu/Menu";
import SubScreenOrders from "../../UI/SubScreenOrders/SubScreenOrders";
import React from "react";


import "./Orders.scss";

const Orders = () => {
  // const history = useHistory();

  
  return (
    <div className="Container-Page-Orders">
      <Menu />
      <SubScreenOrders/> 
    </div>
  );
};
export default Orders;
