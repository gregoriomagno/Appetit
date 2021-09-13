import React from "react";
import { useState } from "react";
import "./ItemMenu.scss";

const ItemMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
     setSubnav(!subnav);
    console.log("selected :"+!subnav);
    return !subnav;
  }
  return (
    <>

    {/* Menu */}
      <div>
        <button
          className={subnav ? "Item-menu-selected" : "Item-menu-not-selected"}
          type="button"
          key={item.key}
          onClick={showSubnav}
        >
          {item.icon}
          <span className="Text-item-menu"  key={item.key}>{item.title }</span>
        </button>
      </div>

      {/* subMenu */}
      {subnav && item.subNav
        ? item.subNav.map((item, index) => {
            return (
              <button className="Item-submenu" type="button" key={item.key}>
                {item.icon}
                <span className="Text-item-menu"  key={item.key}>{item.title} </span>
              </button>
            );
          })
        : null}
    </>
  );
};
export default ItemMenu;
