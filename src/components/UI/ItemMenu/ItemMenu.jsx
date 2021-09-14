import React from "react";
import { useState } from "react";
import "./ItemMenu.scss";
import { useHistory } from "react-router-dom";


const ItemMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(item.open);
  const history = useHistory();

  const showSubnav = () => {
    setSubnav(!subnav);
    console.log("selected :" + !subnav);
    return !subnav;
  }
  const click = (path) => {
    console.log(path);

    return history.push(path, { name: "teste" });
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
          <img src={item.icon} alt="icon-menu"/>
          <span className="Text-item-menu" key={item.key}>{item.title}</span>
        </button>
      </div>

      {/* subMenu */}
      {subnav && item.subNav
        ? item.subNav.map((item, index) => {
          return (
            <button className="Item-submenu" type="button" key={item.key} onClick={()=>{click(item.path)}}>
              {item.open && <hr className="Indicator" />}
              <span className="Text-item-menu" key={item.key}>{item.title} </span>
            </button>
          );
        })
        : null}
    </>
  );
};
export default ItemMenu;
