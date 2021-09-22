import React from "react";
import "./ButtonNextStep.css";
import IconArrowRight from "../.././../assets/icones/IconArrowRight.svg"

const ButtonNextStep = (props) => {
    return (
        <div className="Button-Next-Step-Container-Total-Products-Selected">
        <h6 className="Button-Next-Step-Container-Total-Products-Selected-Text">
          {props.label}
        </h6>

        <button
          className="Button-Next-Step-Container-Total-Products-Selected-Button"
          type="button" onClick={props.onClick}>
          <p>Avançar</p>
          <img src={IconArrowRight} alt={IconArrowRight} className="Button-Next-Step-Container-Total-Products-Selected-Button-Icon"/>
        </button>
      </div>
    );
}
export default ButtonNextStep;