import React, { useContext } from "react";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";

import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import StoreConstext from "../../Store/Context";
import "./NewOrderStepTwo.css";
import { useState } from "react";

const NewOrderStepTwo = ({ status }) => {
  const { setStatusNewOrder } = useContext(StoreConstext);
  const {selectedOption, setSelectedOptions} = useState();

  return (
    <>
      <div className="New-Order-Step-Two-Container-Inf-Order">
        <IconButtonbackPage
          onClick={() => setStatusNewOrder({ progress: "1", obj: null })}
        />
        <div className="New-Order-Step-Two-Container-Text-Title">
          <TitleSubScreen title="Detalhes do pedido" />
        </div>
        <p className="New-Order-Step-Two-Subtitle-Inf-Order">
          Aproveite para adicionar alguma observação para este pedido, caso
          queira.
        </p>
        <div className="New-Order-Step-Two-Container-Product">
          <img
            src={status.obj.photo}
            alt={status.obj.photo}
            className="New-Order-Step-Two-Photo-Obj"
          />
          <div className="New-Order-Step-Two-Container-Column">
            <h6 className="New-Order-Step-Two-Text-Obj-Title">
              {status.obj.title}
            </h6>
            <caption className="New-Order-Step-Two-Text-Obj-Price">
              R$:{" "}
              {status.obj.price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            </caption>
          </div>
        </div>
        <h6 className="New-Order-Step-Two-Text-Options"> Opções </h6>
        <p className="New-Order-Step-Two-Text-Text-Subtitle-Options">
          {status.obj.titleOptions}
        </p>
        
        {status.obj.options.map(function(item){
           return (
              <div className="New-Order-Step-Two-Card-Options">
                
               <input  type = "radio" value={item} name= "gender" className="New-Order-Step-Two-Card-Options-Radio-Button"/> 
               <p className="New-Order-Step-Two-Card-Options-Text">{item} </p>
 
              </div>
           );
        })}

      </div>
    </>
  );
};
export default NewOrderStepTwo;
