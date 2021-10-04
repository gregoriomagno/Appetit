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
    // console.log("selecteds: " + itemsSelected);
    const objOrder = new Order({
      id: 6,
      client: null,
      products: StatusNewOrder.order.itens,
      date: "01/10/2021",
      status: "open",
    });

    var productRemoved = false;
    
    if (objOrder.itens.length === 0) {
      objOrder.itens.push({ product: obj, qnt: 1 });
      selecteds.push(obj.id);
    } else {
      objOrder.itens.forEach((item, index) => {
        if (item.product.id === obj.id) {
          objOrder.itens.splice(index,1);
          selecteds.splice(selecteds.indexOf(obj.id),1);
          productRemoved = true;
          return true;
        }
      });
      if (!productRemoved) {
        objOrder.itens.push({ product: obj, qnt: 1 });
        selecteds.push(obj.id);
      }
    }
    setitemsSelected([...selecteds]);
    const order = {
      id: objOrder.id,
      client: objOrder.client,
      itens: objOrder.itens,
      date: objOrder.date,
      status: objOrder.status,
    };
    setStatusNewOrder({ progress: "1", order: order ,clients: null});
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
