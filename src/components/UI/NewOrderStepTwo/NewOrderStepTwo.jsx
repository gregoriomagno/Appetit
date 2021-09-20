import React, { useContext } from "react";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";
import StoreConstext from "../../Store/Context";
import LoadSteps from "../LoadSteps/LoadSteps";
import FieldSearch from "../FieldSearch/FieldSearch";
import { persons } from "../../../utils/OrdersData";
import Order from "../../../models/Order";

import "./NewOrderStepTwo.css";
import CardNewOrder from "../CardNewOrder/CardNewOrder";
import { useState } from "react";

//atualizar
// setStatusNewOrder({ progress : "2", order: new Order({id: StatusNewOrder.order.key,client : person,products: StatusNewOrder.order.itens,date:StatusNewOrder.order.date,status:"open"})})

const NewOrderStepTwo = ({ status }) => {
  const { StatusNewOrder, setStatusNewOrder } = useContext(StoreConstext);

  const { list, setList } = useState({});

  function onChange(event) {
    const { value } = event.target;

  }

  return (
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
      {persons.map(function (person, index) {

        return <>

          {/* {console.log("contains : " + list.includes(person))} */}
          <CardNewOrder
            key={person.key}
            item={null}
            title={person.clientName}
            photo={person.clientPhoto}
            subTitle={" "}
            onClick={function(){
              var array = [list];
              array.push(person);
              return setList(array);
            }}

          />
          <hr className="New-Order-Step-Two-Divider-Card-Person" />

        </>

      })}

    </div>


  );
};
export default NewOrderStepTwo;
