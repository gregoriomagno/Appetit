import React from "react";
import "./IconButtonbackPage.scss";
import IconArrowBack from "../../../assets/icones/ArrowBack.svg";


const IconButtonbackPage = ({onClick}) => {


    
    return (
        <button onClick={onClick } className="button-icon-back">
        <img src={IconArrowBack} alt="IconBack" className="Icon-arrow-back" />
      </button>
    );
}
export default IconButtonbackPage;