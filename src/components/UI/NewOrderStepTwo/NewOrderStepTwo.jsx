import React, { useContext } from "react";
import TitleSubScreen from "../TitleSubScreen/TitleSubScreen";
// import StoreConstext from "../../Store/Context";
import LoadSteps from "../LoadSteps/LoadSteps";
import FieldSearch from "../FieldSearch/FieldSearch";
import { persons } from "../../../utils/OrdersData";
import { useHistory } from "react-router-dom";
import "./NewOrderStepTwo.css";
import CardNewOrder from "../CardNewOrder/CardNewOrder";
import { useState } from "react";
import StoreConstext from "../../Store/Context";
import Order from "../../../models/Order";
import ButtonNextStep from "../ButtonNextStep/ButtonNextStep";
import Person from "../../../models/person";

//atualizar

const NewOrderStepTwo = ({ status }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);
  const [clients, setClients] = useState(persons);

  const { data, setData } = useContext(StoreConstext);
  const history = useHistory();

  function onChange(event) {
    const { value } = event.target;
    var resultSearch = [];
    persons.forEach(function (person) {
      if (person.clientName.toUpperCase().indexOf(value.toUpperCase()) > -1) {
        resultSearch.push(
          new Person(person.key, person.clientName, person.clientPhoto)
        );
      }
    });
    if (value === "") {
      setClients(persons);
    } else {
      console.log("Lista:    " + resultSearch[0].clientName);
      setClients(resultSearch);
    }
    console.log("clientes lista show: " + clients);
  }
  function endOrder() {
    var list = data;
    console.log("pedidos: " + data);
    console.log("StatusNewOrder.order: " + StatusNewOrder.order.itens);
    var index = data.findIndex((element) => element.date === "01/05/2020");
    console.log("index: "+ index);
    if (index> -1) {
        
    } else {
      list.push({
        id: "100",
        date: "01/05/2020",
        total: StatusNewOrder.order.getTotal(),
        Orders: [
          {
            client: StatusNewOrder.order.client,
            status: StatusNewOrder.order.status,
            products: StatusNewOrder.order.itens,
          },
        ],
      });
    }

    console.log("list: " + list);
    setData(list);
    console.log("pedidos atualizado: " + data);
    setStatusNewOrder({
      progress: "1",
      order: new Order({
        id: -1,
        client: null,
        products: [],
        date: "",
        status: "open",
      }),
    });
    return history.push("/novoPedido/completo");
  }
  return (
    <div>
      <div className="New-Order-Step-Two-Container-Row">
        <TitleSubScreen title="Informações para o pedido" />
        <p className="New-Order-Step-Two-Text-Subtitle">
          Preencha as informações abaixo para concluir esta venda.
        </p>
        <LoadSteps progress={status.progress} />
        <h6 className="New-Order-Step-Two-Text-h6">
          Para quem você está vendendo?
        </h6>

        <FieldSearch
          onChange={onChange}
          placeholder={"Procure o cliente aqui..."}
          trailing={null}
        />
        {clients.map(function (person, index) {
          return (
            <div key={index}>
              <CardNewOrder
                key={person.key}
                item={null}
                title={person.clientName}
                photo={person.clientPhoto}
                subTitle={" "}
                onClick={function () {
                  setStatusNewOrder({
                    progress: "2",
                    order: new Order({
                      id: StatusNewOrder.order.key,
                      client: person,
                      products: StatusNewOrder.order.itens,
                      date: StatusNewOrder.order.date,
                      status: "open",
                    }),
                  });
                }}
              />
              <hr className="New-Order-Step-Two-Divider-Card-Person" />
            </div>
          );
        })}
      </div>
      {StatusNewOrder.order.client !== null && (
        <ButtonNextStep label={"Cliente"} onClick={endOrder} />
      )}
    </div>
  );
};
export default NewOrderStepTwo;
