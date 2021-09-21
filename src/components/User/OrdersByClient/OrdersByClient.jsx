import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useLocation } from "react-router-dom";
import "./OrdersByClient.scss";
import SubScreenOrdersByUser from "../../UI/SubScreenOrdersByUser/SubScreenOrdersByUser";

const OrdersByClient = (props) => {
 
  const location = useLocation();
  return (
    <div className="Container-home">
      <Menu />
     <SubScreenOrdersByUser user={location.state.client}/>
    </div>
  );
};
export default OrdersByClient;
