import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Orders from "./Orders/Orders";
import OrdersByClient from "./OrdersByClient/OrdersByClient";
import RoutesPrivate from "../components/Routes/private/Private";
import PagesNewOrder from "./NewOrder/NewOrder";
import PageFinishNewOrder from "./FinishNewOrder/FinishNewOrder";

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/novoPedido">
          <PagesNewOrder />
        </Route>
        <Route exact path="/pedidos">
          <Orders />
        </Route>
        <Route exact path="/pedidos/cliente">
          <OrdersByClient />
        </Route>
        <Route exact path="/novoPedido/completo">
          <PageFinishNewOrder />
        </Route>

        <RoutesPrivate path="/" component={Home} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
