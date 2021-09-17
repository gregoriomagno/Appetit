import Menu from "../../UI/Menu/Menu";
import React, { useState, useContext } from "react";

import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";

import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";
import FieldSearch from "../../UI/FieldSearch/FieldSearch";
import LoadSteps from "../../UI/LoadSteps/LoadSteps";
import { products } from "../../../utils/OrdersData";

import "./newOrder.scss";
import ListProducts from "../../UI/ListProducts/ListProducts";
import StoreConstext from "../../Store/Context";
import AbstractNewOrder from "../../UI/AbstractNewOrder/AbstractNewOrder";

const NewOrder = () => {
  const { StatusNewOrder } = useContext(StoreConstext);
  const [listProducts, setListProducts] = useState(products);

  function onChange(event) {
    const { value } = event.target;
    var foods = [];
    var resultSearch = [];

    listProducts.forEach((itemList) => {
      itemList.itens.forEach((itemProduct) => {
        console.log(itemProduct);
        if (itemProduct.title.toUpperCase().indexOf(value.toUpperCase()) > -1) {
          foods.push(itemProduct);
        }
      });
      if (foods.length !== 0) {
        resultSearch.push({ category: itemList.category, itens: foods });
        foods = [];
      }
    });

    console.log(resultSearch);
    setListProducts(resultSearch);
    if (value === "") {
      setListProducts(products);
    }
  }

  return (
    <div className="Container-page">
      <Menu />
      <AbstractNewOrder />
      <div className="Container-row">
        <div className="Container-Column">
          <div className="Container-user-header">
            <UserHeaderPhoto />
          </div>

          {StatusNewOrder.progress === "1" && (
            <>
              <div className="Container-inf-order">
                <TitleSubScreen title="Informações para o pedido" />
                <p className="subtitle-inf-order">
                  Preencha as informações abaixo para concluir esta venda.
                </p>
                <LoadSteps progress={StatusNewOrder.progress} />
                <h6 className="Text-h6-inf-new-order">
                  O que você está vendendo?
                </h6>
                <FieldSearch
                  onChange={onChange}
                  placeholder={"Procure o pedido aqui..."}
                  trailing={null}
                />
              </div>
              <ListProducts listProducts={listProducts} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
