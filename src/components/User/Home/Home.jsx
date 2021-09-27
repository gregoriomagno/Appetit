import Menu from "../../UI/Menu/Menu";
import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import StoreConstext from "../../Store/Context";
import "./Home.scss";

const Home = () => {
  // const history = useHistory();
  const { statusMenu, setStatusMenu } = useContext(StoreConstext);

  

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
