import React from "react";
import Context from "./Context";
import useStorage from "../../utils/useStorage";
import { useState } from "react";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [data, setData] = useStorage("data");
  const [StatusNewOrder, setStatusNewOrder]= useState({ progress : "1", obj: null});
  return (
    <Context.Provider
      value={{
        token,
        setToken,
        data,
        setData,
        StatusNewOrder,
        setStatusNewOrder
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
