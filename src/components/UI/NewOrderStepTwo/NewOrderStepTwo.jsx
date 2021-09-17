import React from "react";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";

import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";

import "./NewOrderStepTwo.css";

const NewOrderStepTwo = ({status}) => {
    return (
        <>
            <div className="New-Order-Step-Two-Container-Inf-Order">

                <IconButtonbackPage />
                <div className="New-Order-Step-Two-Container-Text-Title">
                    <TitleSubScreen title="Detalhes do pedido" />
                </div>
                <p className="New-Order-Step-Two-Subtitle-Inf-Order">
                    Aproveite para adicionar alguma observação para este pedido, caso queira.
                </p>
                <div className="New-Order-Step-Two-Container-Product">
                    <img src={status.obj.photo} alt={status.obj.photo} className="New-Order-Step-Two-Photo-Obj" />
                    <div className="New-Order-Step-Two-Container-Column">
                        <h6 className="New-Order-Step-Two-Text-Obj-Title">{status.obj.title}</h6>
                        <caption className="New-Order-Step-Two-Text-Obj-Price">R$: {status.obj.price.toLocaleString("pt-br", {
                            minimumFractionDigits: 2,
                        })}</caption>
                    </div>
                </div>


            </div>

        </>
    );

}
export default NewOrderStepTwo;