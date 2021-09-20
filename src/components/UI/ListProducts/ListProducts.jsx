import React, { useContext } from "react";
import CardFood from "../../UI/CardFood/CardFood";
import StoreConstext from "../../Store/Context";
import "./ListProducts.scss";
import Order from "../../../models/Order";

const ListProducts = ({ listProducts }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);

  function onClickCard(obj) {
  
  


    const objOrder = new Order({id:6,client: null, products: StatusNewOrder.order.itens,date: "18/06/2020",status: "open"});

    

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

    setStatusNewOrder({ progress: "1", order: objOrder });
    console.log(StatusNewOrder.order);
  }

  return (
    <div className="Container-list-products">
      {listProducts.map((item) => {
        return (
          <div className="Container-category">
            <p className="Title-category-products">{item.category}</p>
            {item.itens.map((product) => {
              return (
                <>
                  <CardFood
                    key={product.id}
                    item={null}
                    title={product.title}
                    photo={product.photo}
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
                </>
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
