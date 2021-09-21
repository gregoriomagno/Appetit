import React, { useState, useContext } from "react";
import "./SubScreenOrdersByUser.scss";
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
    console.log("UserSelected: " + user);
    data.forEach((itens) => {
      itens.Orders.forEach((item) => {
        const order = new Order(item);
        if (order.client.key === user.key) {
          orders.push(order);
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
          {ordersByuser.map((item, index) => (
            <div className="Container-order-by-date" key={index}>
              <p className="Text-label-order-by-date">
                <strong className="Strong">{item.date}</strong>
              </p>
              {item.products.map(function (order, index) {
                return (
                  <div key={index}>
                    <Card
                      key={order.key}
                      item={null}
                      title={order.getDescription().replace(",", " + ")}
                      photo={order.itens[0].product.photo}
                      subTitle={
                        "R$ " +
                        order
                          .getTotal()
                          .toLocaleString("pt-br", { minimumFractionDigits: 2 })
                      }
                      value={null}
                    />
                  </div>
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
