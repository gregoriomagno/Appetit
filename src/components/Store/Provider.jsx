import React from "react";
import Context from "./Context";
import useStorage from "../../utils/useStorage";
import { useState } from "react";
import Order from "../../models/Order";
import { OrdersData } from "../../utils/OrdersData";


function initData() {
  var listOrders = [];
  OrdersData.map(function(item){
    listOrders.push(item);
    return 0 ;
  });
  return listOrders;
}

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [data, setData] = useState(OrdersData);
  const [StatusNewOrder, setStatusNewOrder]= useState({ progress : "1", order: new Order({id: -1,client : null,products: [],date:"",status:"open"}),clients: null});
  const [statusMenu, setStatusMenu] = useState("");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        data,
        setData,
        StatusNewOrder,
        setStatusNewOrder,
        statusMenu,
        setStatusMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
