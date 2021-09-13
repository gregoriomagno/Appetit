import React from "react";
import UserImg from "../../../assets/Home/user.svg";
import Card from "../Card/Card";
import IconPlus from "../../../assets/icones/IconPlus.svg";
import FieldSearch from "../FieldSearch/FieldSearch";
import { OrdersData } from "./OrdersData";

import "./SubScreenOrders.scss";
import { useState } from "react";



const SubScreenOrders = () => {
const [ordersAll,setOrdersAll] = useState(OrdersData);
const [orders,setOrders] =  useState(OrdersData);

function onChange(event) {
  const { value } = event.target;

  const resultSearch = ordersAll.filter(
    (item) => item.client.clientName.toUpperCase().indexOf(value.toUpperCase()) > -1
  );
  setOrders(resultSearch);
 
}

  return (
    <div className="Container-orders">
      <div className="Container-img-user">
        <img src={UserImg} alt="userImg" />
      </div>

      <h3 className="Text-hello-user">Olá, Vanusa!</h3>
      <hr className="Line-Text-hello-user" />

      <button className="Button-new-orders" type="button">
        <img src={IconPlus} alt="IconPlus" />
        <p className="Text-button-new-orders">fazer novo pedido</p>
      </button>
      <FieldSearch onChange={onChange}/>

      <hr className="Line-field-search " />

      <ul>
        {orders.map((item, index) => (
          <Card key={item.key} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default SubScreenOrders;
