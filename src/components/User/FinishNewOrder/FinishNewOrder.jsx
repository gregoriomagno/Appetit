import Menu from "../../UI/Menu/Menu";
import React from "react";
import ImgFinishNewOrder from "../../../assets/NewOrder/ImgFinishNewOrder.svg";
import { useHistory } from "react-router-dom";


import "./FinishNewOrder.css";
import UserHeaderPhoto from "../../UI/UserHeaderPhoto/UserHeaderPhoto";
import Button from "../../UI/Button/Button";
const FinishNewOrder = () => {
  const history = useHistory();
  return (
    <div className="Finish-New-Order-Container-page">
      <Menu />
      <div className="Finish-New-Order-Container-Column">
        <div className="Finish-New-Order-Container-Photo-User">
          <UserHeaderPhoto />
        </div>
        <div className="Finish-New-Order-Container-Content">
          <div className="Finish-New-Order-Container-Content-Center">
            <img src={ImgFinishNewOrder} alt={ImgFinishNewOrder} />
            <div className="Finish-New-Order-Container-Content-Center-Buttons">
              <Button disabled={false} Style="2" type="button" onClick={()=> history.push("/pedidos/abertos")}>voltar para lista de pedidos</Button>
              <Button disabled={false} Style="1" type="button" onClick={()=> history.push("/novoPedido")} >FAZER NOVO PEDIDO</Button>

            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default FinishNewOrder;
