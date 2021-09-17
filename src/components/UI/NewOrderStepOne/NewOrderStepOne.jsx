import React, { useState } from 'react';
import FieldSearch from "../../UI/FieldSearch/FieldSearch";
import LoadSteps from "../../UI/LoadSteps/LoadSteps";
import ListProducts from "../../UI/ListProducts/ListProducts";
import { products } from "../../../utils/OrdersData";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";

import "./NewOrderStepOne.css";

const NewOrderStepOne = ({ status }) => {
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
        <>
            <div className="New-Order-Step-One-Container-Inf-Order">
                <div className="New-Order-Step-One-Container-Text-Title">
                    <TitleSubScreen title="Informações para o pedido" />
                </div>
                <p className="New-Order-Step-One-Subtitle-Inf-Order">
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <LoadSteps progress={status.progress} />
                <h6 className="New-Order-Step-One-Text-h6">
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
    );
}
export default NewOrderStepOne;