import React from "react";
import UserImg from "../../../assets/Home/user.svg";
import Card from "../Card/Card";
import IconPlus from "../../../assets/icones/IconPlus.svg";
import FieldSearch from "../FieldSearch/FieldSearch";
import { OrdersData } from "./OrdersData";
import { useHistory } from "react-router-dom";

import "./SubScreenOrders.scss";
import { useState } from "react";



const SubScreenOrders = () => {
  const [ordersAll, setOrdersAll] = useState(OrdersData);
  const [orders, setorders] = useState([]);
  const history = useHistory();
  function initOrders() {
    ///ordenando lista por data
    var resultSearch = ordersAll.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });

    /// criando outra lista com os pedidos separados por data
    var map = [];
    var list = [];
    resultSearch.forEach(function (item, index, array) {
      console.log("date: " + item.date);

      if (list.length === 0) {
        // console.log("loop");
        // console.log(item.date);
        // console.log("List add");
        list.push(item);
      } else {
        // console.log("item date: "+item.date+"==="+list[0].date+"? " );
        // console.log(item.date === list[0].date);
        if (item.date === list[0].date) {
          // console.log("List add");
          list.push(item);
        } else {
          map.push(list);

          // console.log("Map add");

          list = [];

          // console.log("List clean");
          list.push(item);

          // console.log("List add");
        }
        if (index === resultSearch.length - 1) {

          map.push(list);
          // console.log("Map add");
          // console.log("Fim");
        }
      }
    });
    return map;
  }

  const [ordersByDate, setordersByDate] = useState(initOrders());

  function onChange(event) {
    const { value } = event.target;

    const resultSearch = ordersAll.filter(
      (item) =>
        item.client.clientName.toUpperCase().indexOf(value.toUpperCase()) > -1
    );
    setorders(resultSearch);
    if (value === "") {
      setorders([]);
    }
  }
  function newOrder() {
    return history.push("/pedidos",{name:"teste"});
  }
  

  return (
    <div className="Container-scroll">
      <div className="Container-orders">

        <div className="Container-img-user">
          <img src={UserImg} alt="userImg" />
        </div>

        <h3 className="Text-hello-user">Olá, Vanusa!</h3>
        <hr className="Line-Text-hello-user" />

        <button className="Button-new-orders" type="button" onClick={newOrder}>
          <img src={IconPlus} alt="IconPlus" />
          <p className="Text-button-new-orders">fazer novo pedido</p>
        </button>
        <FieldSearch onChange={onChange} />

        <hr className="Line-field-search " />
        {orders.length === 0 && (
          <ul>
            {ordersByDate.map((item, index) => (
              <div className="Container-order-by-date">
                <p className="Text-label-order-by-date">
                  <strong className="Strong">{item[0].date}</strong>, Você vendeu
                  <strong>
                    {" "}
                    R${" "}
                    {item
                      .reduce((a, b) => a + b.total, 0.0)
                      .toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                  </strong>
                </p>
                {item.map((order, index) => (
                  <Card key={order.id} item={order} />
                ))}
              </div>
            ))}
          </ul>
        )}

        {orders.length !== 0 && (
          orders.map((order, index) => (
            <Card key={order.id} item={order} />
          ))
        )}
      </div>
    </div>
  );
};
export default SubScreenOrders;
