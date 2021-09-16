import React from "react";
import Context from "./Context";
import useStorage from "../../utils/useStorage";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [data, setData] = useStorage("data");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
