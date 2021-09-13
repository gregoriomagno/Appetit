import React from "react";
import IconSearch from "../../../assets/icones/IconSearch.svg";
import IconChangeSearch from "../../../assets/icones/IconChangeSearch.svg";
import "./FieldSearch.scss";

const FieldSearch = ({ onChange }) => {
  return (
    <div className="Container-field-search">
      <div className="Container-field-search-left">
        <img src={IconSearch} alt="IconSearch" className="Icon-search" />

        <input
          onChange={onChange}
          id="search"
          name="search"
          type="text"
          placeholder="Procure o pedido aqui..."
          className="Field-search"
        />
      </div>
      <img
        src={IconChangeSearch}
        alt="IconChangeSearch"
        className="Icon-change-search"
      />
    </div>
  );
};
export default FieldSearch;
