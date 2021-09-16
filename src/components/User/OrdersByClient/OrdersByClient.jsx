import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IconArrowBack from "../../../assets/icones/ArrowBack.svg";
import "./OrdersByClient.scss";
import SubScreenOrdersByUser from "../../UI/SubScreenOrdersByUser/SubScreenOrdersByUser";

const OrdersByClient = (props) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="Container-home">
      <Menu />
     <SubScreenOrdersByUser user={location.state.client}/>
    </div>
  );
};
export default OrdersByClient;
