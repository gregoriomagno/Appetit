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

  const { data, setData } = useContext(StoreConstext);
  const history = useHistory();

  function checkListClients(id) {
    if (StatusNewOrder.clients === null) {
      return false;
    } else {
      return StatusNewOrder.clients.some((item) => item.key === id);
    }
  }
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
    console.log("resultSearch: " + resultSearch.length);
    if (value === "") {
      setClients(persons);
    } else {
      setClients(resultSearch);
    }
    console.log("clientes lista show: " + clients);
  }

  function clickCard(person) {
    if (StatusNewOrder.clients === null) {
      console.log("1");

      var array = [];

      array.push(person);

      setStatusNewOrder({
        progress: "2",
        order: new Order({
          id: StatusNewOrder.order.key,
          client: null,
          products: StatusNewOrder.order.itens,
          date: StatusNewOrder.order.date,
          status: "open",
        }),
        clients: [...array],
      });
    } else if (checkListClients(person.key)) {
      console.log("2");

      var array = [...StatusNewOrder.clients];

      array = array.filter(function (idRemove) {
        return idRemove.key !== person.key;
      });

      console.log("person.key : " + person.key);

      setStatusNewOrder({
        progress: "2",
        order: new Order({
          id: StatusNewOrder.order.key,
          client: null,
          products: StatusNewOrder.order.itens,
          date: StatusNewOrder.order.date,
          status: "open",
        }),
        clients: array.length === 0 ? null : [...array],
      });
    } else {
      console.log("3");
      var array = [...StatusNewOrder.clients];
      array.push(person);
      setStatusNewOrder({
        progress: "2",
        order: new Order({
          id: StatusNewOrder.order.key,
          client: null,
          products: StatusNewOrder.order.itens,
          date: StatusNewOrder.order.date,
          status: "open",
        }),
        clients: [...array],
      });
    }
  }
  function endOrder() {
    var list = [...data];
    StatusNewOrder.clients.map(function (client) {
      const order = {
        id: StatusNewOrder.order.id,
        client: client,
        products: StatusNewOrder.order.itens,
        date: StatusNewOrder.order.date,
        status: StatusNewOrder.order.status,
      };
      list.push(order);
      return 0;
    });

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
      clients: [],
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
                StatusNewOrder.clients !== null && index === clients.length - 1
                  ? "New-Order-Step-Two-Card-Margin"
                  : ""
              }
            >
              <CardNewOrder
                key={person.key}
                item={null}
                title={person.clientName}
                photo={
                  checkListClients(person.key)
                    ? IconSelected
                    : person.clientPhoto
                }
                subTitle={" "}
                onClick={function () {
                  clickCard(person);
                }}
              />
              <hr className="New-Order-Step-Two-Divider-Card-Person" />
            </div>
          );
        })}
      </div>
      {StatusNewOrder.clients !== null && (
        <ButtonNextStep
          label={
            StatusNewOrder.clients.length > 1
              ? StatusNewOrder.clients.length + " clientes selecionados"
              : "1 cliente selecionado"
          }
          onClick={endOrder}
          key={"4"}
        />
      )}
    </>
  );
};
export default NewOrderStepTwo;
