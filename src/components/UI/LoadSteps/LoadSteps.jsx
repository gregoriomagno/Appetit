import React from "react";
import "./LoadSteps.scss";


const LoadSteps = ({progress}) => {
    return (
        <div className="Container-steps">
        <p className="Text-title-steps"> {"Passo "+ progress +" de 2"} </p>
        <div className="Container-progress-steps">
          <div className={"Container-progress-"+progress} />
        </div>
      </div>  
    );
}
export default LoadSteps;