import React from "react";
import IconSearch from "../../../assets/icones/IconSearch.svg";
import "./FieldSearch.scss";

const FieldSearch = ({ onChange, placeholder,trailing }) => {
  return (
    <div className="Container-column">
      <div className="Container-field-search">
        <div className="Container-field-search-left">
          <img src={IconSearch} alt="IconSearch" className="Icon-search" />

          <input
            onChange={onChange}
            id="search"
            name="search"
            type="text"
            placeholder={placeholder}
            className="Field-search"
          />
        </div>
        {trailing !== null && <img
          src={trailing}
          alt="IconChangeSearch"
          className="Icon-change-search"
        />}


      </div>
      <hr className="Line-field-search " />
    </div>
  );
};
export default FieldSearch;
