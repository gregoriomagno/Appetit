import React, {useContext } from "react";
import { Route,Redirect } from "react-router";
import StoreConstext from "../../Store/Context";


const RoutesPrivate = ({ component: Component, ...rest}) =>{

const {token} = useContext(StoreConstext);

    return (
        <Route {...rest}
        render={()=> token ? 
            <Component{...rest}/> :

            <Redirect to="/login"/>
        }/>
    )
}
 export default RoutesPrivate;