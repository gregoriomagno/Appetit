import React from "react";
import "./IconButtonbackPage.scss";
import IconArrowBack from "../../../assets/icones/ArrowBack.svg";
import { useHistory } from "react-router-dom";

const IconButtonbackPage = (props) => {

    const history = useHistory();
    
    return (
        <button onClick={()=> history.goBack()} className="button-icon-back">
        <img src={IconArrowBack} alt="IconBack" className="Icon-arrow-back" />
      </button>
    );
}
export default IconButtonbackPage;