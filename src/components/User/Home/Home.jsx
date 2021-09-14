import Menu from "../../UI/Menu/Menu";
import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.scss";
import SubScreenOrders from "../../UI/SubScreenOrders/SubScreenOrders";

const Home = () => {
  const history = useHistory();

  function logout() {
    return history.push("/login");
  }

  return (
    <div className="Container-home">
      <Menu />
      <h1>Home</h1>
      {/* <SubScreenOrders/> */}
      
    </div>
  );
};
export default Home;
