import React from "react";
import { SidebarData } from "./SidebarData";
import Logo from "../../../assets/Home/LogoWhite.svg";
import ItemMenu from "../ItemMenu/ItemMenu";
import "./Menu.scss";

function Menu() {
  return (
    <div className="Container-menu-home">
      <div>
        <img src={Logo} alt="Logo" className="Container-logo" />
        <div className="Menu-home">
          <nav className="Container-sidebar">
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={item.key}>
                    <ItemMenu item={item} key={item.key}  />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <span className="Text-baseboard-menu">
        Infoway Gestão em Saúde ©, 2019.
      </span>
    </div>
  );
}
export default Menu;
