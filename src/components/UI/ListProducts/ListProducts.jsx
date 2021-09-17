import React from "react";
import CardFood from "../../UI/CardFood/CardFood";
import "./ListProducts.scss";

function onClickCard(obj){
    

}


const ListProducts = ({ listProducts }) => {
  return (
    <div className="Container-list-products">
      {listProducts.map((item) => {
        return (
          <div className="Container-category">
            <p className="Title-category-products">{item.category}</p>
            {item.itens.map((product) => {
              return (
                <CardFood
                  key={product.id}
                  item={null}
                  title={product.title}
                  photo={product.photo}
                  subTitle={" "}
                  value={
                    "R$: " +
                    product.price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })
                  }
                />
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
