import React, { useState, useContext } from "react";
import Card from "../Card/Card";
import IconPlus from "../../../assets/icones/IconPlus.svg";
import FieldSearch from "../FieldSearch/FieldSearch";

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

function setOrderByDate(list) {
  
  var listByDate = [];
  list.map(function (item) {
    // console.log("map");
    const obj = new Order(item);
    if (listByDate.length === 0) {
      // console.log("list vazia");
      listByDate.push({
        date: item.date,
        order: [item],
        total: obj.getTotal(),
      });
    } else {
      listByDate.forEach(function (itemByDate, index) {
        // console.log("forEach");
        if (itemByDate.date === item.date) {
          // console.log("data === data");
          listByDate[index].total+=obj.getTotal();
          listByDate[index].order.push(item);
        } else {
          if(index === listByDate.length-1){
            // console.log("data != data");
            listByDate.push({
              date: item.date,
              order: [item],
              total: obj.getTotal(),
            });
          }
          
        }
      });
    }
    return 0;
  });

  // console.log("itens setOrder saida: " + listByDate);
  return listByDate;
}

const SubScreenOrders = () => {
  const { data } = useContext(StoreConstext);

  const [orders, setorders] = useState([]);
  console.log("data: "+ data);
  const [AllOrders, setAllOders] = useState(setOrderByDate(data));
  
  const history = useHistory();

  function onChange(event) {
    const { value } = event.target;

    var resultSearch = [];

    AllOrders.forEach((item) => {
      resultSearch.push(
        item.order.filter(
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
    <div className="Container-Orders-List">
     
        <div className="Container-header-photo">
          <UserHeaderPhoto />
        </div>

        <TitleSubScreen title="Olá, Vanusa!" />

        <button className="Button-new-orders" type="button" onClick={newOrder}>
          <img src={IconPlus} alt="IconPlus" />
          <p className="Text-button-new-orders">fazer novo pedido</p>
        </button>
        <FieldSearch
          onChange={onChange}
          placeholder={"Procure o pedido aqui..."}
          trailing={IconChangeSearch}
        />
        
        {orders.length === 0 && (
          <ul>
            {AllOrders.map(function (item, index) {
              return (
                <div className="Container-order-by-date" key={index}>
                  <p className="Text-label-order-by-date">
                    <strong className="Strong">{item.date}</strong>, Você vendeu
                    <strong>
                      {" "}
                      R${" "}
                      {
                        item.total.toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })
                      }
                    </strong>
                  </p>

                  {item.order.map((itemOrder, index) => {
                    const objOrder = new Order(itemOrder);
                    return (
                      <div key={index}>
                        <Card
                          key={objOrder.id}
                          //verificar item
                          item={objOrder.client}
                          title={objOrder.client.clientName}
                          photo={objOrder.client.clientPhoto}
                          subTitle={objOrder.getDescription()}
                          value={
                            "R$ " +
                            objOrder.getTotal().toLocaleString("pt-br", {
                              minimumFractionDigits: 2,
                            })
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        )}

        {orders.length !== 0 &&
          orders.map((orders, index) => (
            <div key={index}>
              {orders.map((order, index) => {
                const objOrder = new Order(order);
                return (
                  <div key={index}>
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
                  </div>
                );
              })}
            </div>
          ))}
      
    </div>
  );
};
export default SubScreenOrders;
