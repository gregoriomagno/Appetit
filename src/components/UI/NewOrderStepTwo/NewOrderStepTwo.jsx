import React, { useContext } from "react";
import TitleSubScreen from "../../UI/TitleSubScreen/TitleSubScreen";

import IconButtonbackPage from "../../UI/IconButtonbackPage/IconButtonbackPage";
import StoreConstext from "../../Store/Context";
import "./NewOrderStepTwo.css";
import { useState } from "react";
import LoadSteps from "../LoadSteps/LoadSteps";

const NewOrderStepTwo = ({ status }) => {
  const { setStatusNewOrder } = useContext(StoreConstext);
 

  return (
   
    <LoadSteps progress={status.progress} />
     
  );
};
export default NewOrderStepTwo;
