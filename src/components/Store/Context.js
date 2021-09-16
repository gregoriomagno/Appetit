import { createContext } from "react";

 const StoreConstext = createContext({
    token : null,
    setToken: () => {},
    Data : null,
    setData : () => {},

});
export default StoreConstext;