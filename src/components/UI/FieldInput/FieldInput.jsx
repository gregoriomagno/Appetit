import React from "react";
import "./FieldInput.scss";

const FieldInput = (props) => {
  return (
    <div className="form">
      <input
        type={props.type}
        id={props.id}
        className="form-input"
        autoComplete={props.autoComplete}
        placeholder=" "
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        onClick={props.onClick}
      />
      <label form={props.id} className="form-label">
        {props.placeholder}
      </label>
    </div>
  );
};
export default FieldInput;
