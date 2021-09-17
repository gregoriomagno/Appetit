import React, { useState, useContext } from "react";
import "./SubScreenOrdersByUser.scss";
import IconArrowBack from "../../../assets/icones/ArrowBack.svg";
import UserHeaderPhoto from "../UserHeaderPhoto/UserHeaderPhoto";
import TitleSubScreen from "../TitleSubScreen/TitleSubScreen";
import StoreConstext from "../../Store/Context";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import Order from "../../../models/Order";
import imageFodd from "../../../assets/imageFood/food.svg";
import IconButtonbackPage from "../IconButtonbackPage/IconButtonbackPage";

const SubScreenOrdersByUser = ({ user }) => {
  const { data } = useContext(StoreConstext);
  const history = useHistory();
  
  function selectOrdersByUser() {
    var ordersByUser = [];
    var orders = [];
    data.forEach((itens) => {
      itens.Orders.forEach((item) => {
        const order = new Order(item);
        if (order.client.key === user.key) {
          // console.log("ok");
          orders.push(order);
        }
      });
      if (orders.length !== 0) {
        ordersByUser.push({ date: itens.date, products: orders });
        orders = [];
      }
    });
    console.log(ordersByUser);
    // console.log(user);

    return ordersByUser;
  }
  const [ordersByuser, setoOdersByUser] = useState(selectOrdersByUser());

  return (
    <div className="Container-orders-by-user">
      <div className="Container-user-header-photo">
        <UserHeaderPhoto />
      </div>

      <IconButtonbackPage />
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
          {ordersByuser.map((item, index) => (
            <div className="Container-order-by-date">
              <p className="Text-label-order-by-date">
                <strong className="Strong">{item.date}</strong>
              </p>
              {item.products.map(function (order) {
                return (
                  <Card
                    key={order.key}
                    item={null}
                    title={order.getDescription().replace(",", " + ")}
                    photo={imageFodd}
                    subTitle={
                      "R$ " +
                      order
                        .getTotal()
                        .toLocaleString("pt-br", { minimumFractionDigits: 2 })
                    }
                    value={null}
                  />
                );
              })}
            </div>
          ))}
        </ul>
      }
    </div>
  );
};
export default SubScreenOrdersByUser;
