import React, { useState, useContext } from "react";
import "./SubScreenOrdersByUser.scss";
import UserHeaderPhoto from "../UserHeaderPhoto/UserHeaderPhoto";
import TitleSubScreen from "../TitleSubScreen/TitleSubScreen";
import StoreConstext from "../../Store/Context";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import Order from "../../../models/Order";

import IconButtonbackPage from "../IconButtonbackPage/IconButtonbackPage";

const SubScreenOrdersByUser = ({ user }) => {
  const { data } = useContext(StoreConstext);
  const history = useHistory();

  function selectOrdersByUser() {
    var ordersByUser = [];
    var orders = [];
    console.log("Data: " + data); 

    data.forEach((itens) => {
      itens.products.forEach((item) => {
      console.log("teste client" + itens.clientName)
        if (itens.client.key === user.key) {
          orders.push(item);
        }
      });
      if (orders.length !== 0) {
        ordersByUser.push({ date: itens.date, products: orders });
        orders = [];
      }
    });
    console.log("OrderByUser: " + ordersByUser);

    return ordersByUser;
  }
  const [ordersByuser] = useState(selectOrdersByUser());

  return (
    <div className="Container-orders-by-user">
      <div className="Container-user-header-photo">
        <UserHeaderPhoto />
      </div>

      <IconButtonbackPage onClick={() => history.goBack()} />
      <div className="Container-title-orderByUser">
        <TitleSubScreen
          title={
            "Pedidos de " +
            user.clientName.substring(0, user.clientName.indexOf(" "))
          }
        />
      </div>

      {
        <ul>
          {ordersByuser.map(function(item, index)  {
            var objOrder = new Order(item);
           return  <div className="Container-order-by-date" key={index}>
              <p className="Text-label-order-by-date">
                <strong className="Strong">{item.date}</strong>
              </p>
             
                
              
                  <div key={index}>
                    <Card
                      key={item.products[0].key}
                      item={null}
                      title={
                        objOrder.getDescription().replace(",", " + ")
                      }
                      photo={item.products[0].product.photo}
                      subTitle={
                        "R$ " +
                        objOrder
                          .getTotal()
                          .toLocaleString("pt-br", { minimumFractionDigits: 2 })
                      }
                      value={null}
                    />
                  </div>
               
            </div>
            })}
        </ul>
      }
    </div>
  );
};
export default SubScreenOrdersByUser;
