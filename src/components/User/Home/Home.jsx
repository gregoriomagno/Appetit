import Menu from "../../UI/Menu/Menu";
import React from "react";
// import { useHistory } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  // const history = useHistory();

  // function logout() {
  //   return history.push("/login");
  // }

  return (
    <div className="Container-home">
      <Menu />
      <h1>Home</h1>
      
    </div>
  );
};
export default Home;
