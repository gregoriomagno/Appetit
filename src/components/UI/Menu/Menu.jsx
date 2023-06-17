import React, { useContext,useEffect } from "react";
import { SidebarData } from "./SidebarData";
import Logo from "../../../assets/Home/LogoWhite.svg";
import ItemMenu from "../ItemMenu/ItemMenu";
import { useLocation } from "react-router-dom";
import StoreConstext from "../../Store/Context";
import "./Menu.scss";

function Menu() {
  const { statusMenu, setStatusMenu } = useContext(StoreConstext);
  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    setStatusMenu(path);
  }, );
  // path !== statusMenu
  return (
    <div className="Container-menu-home">
      <div className="Container-Logo-Sidebar">
        <img src={Logo} alt="Logo" className="Container-logo" />
        <nav className="Container-sidebar">
          {SidebarData.map((item, index) => {
            return (
              <div key={item.key}>
                <ItemMenu item={item} key={item.key} />
              </div>
            );
          })}
        </nav>
      </div>

      <span className="Text-baseboard-menu">
      </span>
    </div>
  );
}
export default Menu;
