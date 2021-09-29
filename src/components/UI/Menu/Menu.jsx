import React from "react";
import { SidebarData } from "./SidebarData";
import Logo from "../../../assets/Home/LogoWhite.svg";
import ItemMenu from "../ItemMenu/ItemMenu";

import "./Menu.scss";

function Menu() {
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
        Infoway Gestão em Saúde ©, 2019.
      </span>
    </div>
  );
}
export default Menu;
