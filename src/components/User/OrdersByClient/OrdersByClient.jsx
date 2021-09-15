import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'; 
import "./OrdersByClient.scss";

const OrdersByClient = (props) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="Container-home">
      <Menu />
      <h1>{location.state.client.clientName}</h1>
    
    </div>
  );
};
export default OrdersByClient;
