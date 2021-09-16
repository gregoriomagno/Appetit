import React from "react";
import "./TitleSubScreen.scss";

const TitleSubScreen = ({title}) => {
  return (
    <>
      <h3 className="Text-title">{title}</h3>
      <hr className="Line-title" />
    </>
  );
};
export default TitleSubScreen;
