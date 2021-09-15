import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Orders from "./Orders/Orders";
import OrdersByClient from "./OrdersByClient/OrdersByClient"
import RoutesPrivate from "../components/Routes/private/Private";

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/pedidos">
          <Orders/>
        </Route>
        <Route exact path="/pedidos/cliente">
          <OrdersByClient/>
        </Route>
        <RoutesPrivate path="/" component={Home} />
        {/* <RoutesPrivate path="/pedidos" component={Orders} /> */}
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
