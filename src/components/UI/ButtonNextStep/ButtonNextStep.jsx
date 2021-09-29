import React from "react";
import "./ButtonNextStep.css";
import IconArrowRight from "../.././../assets/icones/IconArrowRight.svg";

const ButtonNextStep = (props) => {
  return (
    <div
      className="Button-Next-Step-Container-Total-Products-Selected"
      key={props.key}
    >
      <h6 className="Button-Next-Step-Container-Total-Products-Selected-Text">
        {props.label}
      </h6>

      <button
        className="Button-Next-Step-Container-Total-Products-Selected-Button"
        type="button"
        onClick={props.onClick}
        key={props.key}
      >
        <p>Avançar</p>
        <img
          src={IconArrowRight}
          alt={IconArrowRight}
          className="Button-Next-Step-Container-Total-Products-Selected-Button-Icon"
        />
      </button>
    </div>
  );
};
export default ButtonNextStep;
