import React, { useState, useContext } from "react";
import Card from "../Card/Card";
import IconPlus from "../../../assets/icones/IconPlus.svg";
import FieldSearch from "../FieldSearch/FieldSearch";
import { OrdersData } from "../../../utils/OrdersData";

import { useHistory } from "react-router-dom";
import IconChangeSearch from "../../../assets/icones/IconChangeSearch.svg";
import UserHeaderPhoto from "../UserHeaderPhoto/UserHeaderPhoto";
import TitleSubScreen from "../TitleSubScreen/TitleSubScreen";
import StoreConstext from "../../Store/Context";
import Order from "../../../models/Order";
import "./SubScreenOrders.scss";


function initOrders(list) {
  ///ordenando lista por data
  var resultSearch = list.sort(function (a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });
  return resultSearch;
}

const SubScreenOrders = () => {


  const [ordersAll] = useState(initOrders(OrdersData));

  const [orders, setorders] = useState([]);

 

  const { setData } = useContext(StoreConstext);

  const history = useHistory();

  setData(ordersAll);
  

  function onChange(event) {
    const { value } = event.target;

    var resultSearch = [];

    ordersAll.forEach((item) => {
      resultSearch.push(
        item.Orders.filter(
          (order) =>
            order.client.clientName.toUpperCase().indexOf(value.toUpperCase()) >
            -1
        )
      );
    });

    console.log(resultSearch);
    setorders(resultSearch);
    if (value === "") {
      setorders([]);
    }

  }

  function newOrder() {
    return history.push("/novoPedido");
  }

 

  

  return (
    <div className="Container-scroll">
      <div className="Container-orders">
        <div className="Container-header-photo">
          <UserHeaderPhoto />
        </div>

        <TitleSubScreen title="Olá, Vanusa!" />

        <button className="Button-new-orders" type="button" onClick={newOrder}>
          <img src={IconPlus} alt="IconPlus" />
          <p className="Text-button-new-orders">fazer novo pedido</p>
        </button>
        <FieldSearch onChange={onChange} placeholder={"Procure o pedido aqui..."} trailing={IconChangeSearch} />

       
        {orders.length === 0 && (
          <ul>
            {ordersAll.map((item, index) => (
              <div className="Container-order-by-date">
                <p className="Text-label-order-by-date">
                  <strong className="Strong">{item.date}</strong>, Você vendeu
                  <strong>
                    {" "}
                    R${" "}
                    {item.total.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </strong>
                </p>
                {item.Orders.map((order, index) => {
                  const objOrder = new Order(order);
                  return (
                    <Card
                      key={order.id}
                      item={order}
                      title={order.client.clientName}
                      photo={order.client.clientPhoto}
                      subTitle={objOrder.getDescription()}
                      value={"R$ " + objOrder
                        .getTotal()
                        .toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                    />
                  );
                })}
              </div>
            ))}
          </ul>
        )}

        {orders.length !== 0 &&
          orders.map((orders, index) =>
            orders.map((order) => {
              const objOrder = new Order(order);
              return (
                <Card
                  key={order.id}
                  item={order}
                  title={order.client.clientName}
                  photo={order.client.clientPhoto}
                  subTitle={objOrder.getDescription()}
                  value={
                    "R$:" +
                    objOrder
                      .getTotal()
                      .toLocaleString("pt-br", { minimumFractionDigits: 2 })
                  }
                />
              );
            })
          )}
      </div>
    </div>
  );
};
export default SubScreenOrders;
