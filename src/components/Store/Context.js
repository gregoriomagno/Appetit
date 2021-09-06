import { createContext } from "react";

 const StoreConstext = createContext({
    token : null,
    setToken: () => {},

});
export default StoreConstext;