import React, { useContext } from "react";
import CardNewOrder from "../CardNewOrder/CardNewOrder";
import StoreConstext from "../../Store/Context";
import "./ListProducts.scss";
import Order from "../../../models/Order";
import { useState } from "react";
import IconSelected from "../../../assets/icones/ItemSelected.svg";
const ListProducts = ({ listProducts, buttonActive }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);
  const [itemsSelected, setitemsSelected] = useState([]);
  function onClickCard(obj) {
    var selecteds = [...itemsSelected];
    selecteds.push(obj.id);
    setitemsSelected([...selecteds]);
    // console.log("selecteds: " + itemsSelected);

    const objOrder = new Order({
      id: 6,
      client: null,
      products: StatusNewOrder.order.itens,
      date: "18/06/2020",
      status: "open",
    });
    var productAdded = false;
    if (objOrder.itens.length === 0) {
      objOrder.itens.push({ product: obj, qnt: 1 });
    } else {
      objOrder.itens.forEach((item, index) => {
        if (item.product.id === obj.id) {
          objOrder.itens[index] = { product: obj, qnt: item.qnt + 1 };
          productAdded = true;
          return true;
        }
      });
      if (!productAdded) {
        objOrder.itens.push({ product: obj, qnt: 1 });
      }
    }
    // console.log("objOrder: " + objOrder.itens);
    const order = {
      id: objOrder.id,
      client: objOrder.client,
      itens: objOrder.itens,
      date: objOrder.date,
      status: objOrder.status,
    };

    setStatusNewOrder({ progress: "1", order: order });
    // console.log("list product in LIst: " + StatusNewOrder.order.products);
  }
  function checkSelected(id) {
    // console.log("list Selecteds: "+itemsSelected);
    var check = itemsSelected.some((item) => {
      // console.log(id+"==="+ item);
      return id === item;
    });
    // console.log(check);
    return check;
  }

  return (
    <div className="Container-list-products">
      {listProducts.map((item, index) => {
        return (
          <div className="Container-category" key={index}>
            <p className="Title-category-products">{item.category}</p>
            {item.itens.map(function (product, indexProduct) {
              return (
                <div
                  key={product.id}
                  className={
                    buttonActive &&
                    index === listProducts.length - 1 &&
                    indexProduct === item.itens.length - 1
                      ? "List-Products-Container-Card"
                      : ""
                  }
                >
                  <CardNewOrder
                    key={product.id}
                    item={null}
                    title={product.title}
                    photo={
                      checkSelected(product.id) ? IconSelected : product.photo
                    }
                    subTitle={" "}
                    onClick={() => {
                      onClickCard(product);
                    }}
                    value={
                      "R$: " +
                      product.price.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })
                    }
                  />

                  <hr className="Line-divisor-foods" />
                </div>
              );
            })}
            <hr className="Line-divider" />
          </div>
        );
      })}
    </div>
  );
};
export default ListProducts;
