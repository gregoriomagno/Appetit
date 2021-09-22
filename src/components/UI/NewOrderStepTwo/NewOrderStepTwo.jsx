import React, { useContext } from "react";
import TitleSubScreen from "../TitleSubScreen/TitleSubScreen";
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
import IconSelected from "../../../assets/icones/ItemSelected.svg";

const NewOrderStepTwo = ({ status }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);
  const [clients, setClients] = useState(persons);
  const [clientSelected, setClientSelected] = useState();
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
    var list = [...data];

    const order = {
      id: StatusNewOrder.order.id,
      client: StatusNewOrder.order.client,
      products: StatusNewOrder.order.itens,
      date: StatusNewOrder.order.date,
      status: StatusNewOrder.order.client.status,
    };
    list.push(order);

    // console.log("-----------------");
    // console.log("list: " + list);
    setData(list);
    // console.log("-----------------");

    // console.log("data: " + data);

    // console.log("-----------------");
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
    <>
      <div className="New-Order-Step-Two-Container-Column">
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
      </div>
      <div className="New-Order-Step-Two-List-Clients">
        {clients.map(function (person, index) {
          return (
            <div
              key={index}
              className={
                (StatusNewOrder.order.client !== null && index ===clients.length-1 )
                  ? "New-Order-Step-Two-Card-Margin"
                  : ""
              }
            >
              <CardNewOrder
                key={person.key}
                item={null}
                title={person.clientName}
                photo={
                  clientSelected === person.key
                    ? IconSelected
                    : person.clientPhoto
                }
                subTitle={" "}
                onClick={function () {
                  setClientSelected(person.key);
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
    </>
  );
};
export default NewOrderStepTwo;
