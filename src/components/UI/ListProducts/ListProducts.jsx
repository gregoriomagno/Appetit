import React, { useContext } from "react";
import CardFood from "../../UI/CardFood/CardFood";
import StoreConstext from "../../Store/Context";
import "./ListProducts.scss";

const ListProducts = ({ listProducts }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);

  function onClickCard(obj) {
    var cart = StatusNewOrder.cart;
    var productAdded = false;
    if (cart.length === 0) {
      cart.push({ product: obj, qnt: 1 });
    } else {
      cart.forEach((item, index) => {
        if (item.product.id === obj.id) {
          cart[index] = { product: obj, qnt: item.qnt + 1 };
          productAdded = true;
          return true;
        }
      });
      if (!productAdded) {
        cart.push({ product: obj, qnt: 1 });
      }
    }

    setStatusNewOrder({ progress: "1", cart: cart, client: null });
    console.log(StatusNewOrder.cart);
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
