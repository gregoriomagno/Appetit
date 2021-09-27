import { createContext } from "react";

 const StoreConstext = createContext({
    token : null,
    setToken: () => {},
    Data : null,
    setData : () => {},
    StatusNewOrder : null,
    setStatusNewOrder : () =>{},
    statusMenu :null,
    setStatusMenu: () =>{}


});
export default StoreConstext;