import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useHistory } from "react-router-dom";
import illustrationNewOrder from "../../../assets/NewOrder/illustrationNewOrder.svg";
// import products from 
import "./newOrder.scss";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";
import FieldSearch from "../../UI/FieldSearch/FieldSearch";
import LoadSteps from "../../UI/LoadSteps/LoadSteps";
import PhotoFood  from "../../../assets/imageFood/food.svg"
import { products } from "../../../utils/OrdersData";
import Card from "../../UI/Card/Card";
import CardFood from "../../UI/CardFood/CardFood";

const NewOrder = () => {
  return (
    <div className="Container-page">
      <Menu />
      <div className="Container-row">

        <div className="Container-products">
          <IconButtonbackPage />
          <div className="Container-title">
            <TitleSubScreen title="Novo pedido" />
          </div>
          <div className="Container-img-illustration">
            <img
              src={illustrationNewOrder}
              alt={"illustration"}

            />
          </div>

        </div>

        <div className="Container-Column">
          <div className="Container-user-header">
            <UserHeaderPhoto />
          </div>

          <div className="Container-inf-order">
            <TitleSubScreen title="Informações para o pedido" />
            <p className="subtitle-inf-order">Preencha as informações abaixo para concluir esta venda.</p>
            <LoadSteps progress="1" />
            <h6 className="Text-h6-inf-new-order">O que você está vendendo?</h6>
            <FieldSearch onChange={() => { }} placeholder={"Procure o pedido aqui..."} trailing={null} />
          </div>

          {products.map((item) => {
            return <div className="Container-category">
              <p className="Title-category-products">{item.category}</p>
              {item.itens.map((product) => {
                return <CardFood
                  key={product.id}
                  item={null}
                  title={product.title}
                  photo={PhotoFood}
                  subTitle={" "}
                  value={"R$: " + product.price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                />
              })}
            </div>


          })}

        </div>
      </div>
    </div>
  );
};
export default NewOrder;
