import React, { useContext } from "react";
import "./ItemMenu.scss";
import { useHistory } from "react-router-dom";
import StoreConstext from "../../Store/Context";

const ItemMenu = ({ item }) => {
  const { statusMenu, setStatusMenu } = useContext(StoreConstext);

  const history = useHistory();

  const clickItemMenu = () => {
    setStatusMenu({ menu: item.key, subMenu: statusMenu.subMenu });
  };
  const click = (item) => {
    setStatusMenu({ menu: statusMenu.menu, subMenu: item.key });
    return history.push(item.path, { name: "teste" });
  };

  return (
    <div className="Container-Itens-Menu">
      <button
        className={
          statusMenu.menu === item.key
            ? "Item-menu-selected"
            : "Item-menu-not-selected"
        }
        type="button"
        key={item.key}
        onClick={() => clickItemMenu(item.key)}
        disabled={item.disabled}
      >
        {" "}
        <img
          src={statusMenu.menu === item.key ? item.iconSelected : item.icon}
          alt={item.key}
        />
        <span className="Text-item-menu" key={item.key}>
          {item.title}
        </span>
      </button>

      {statusMenu.menu === item.key && item.subNav
        ? item.subNav.map((item, index) => {
            return (
              <button
                className="Item-submenu"
                type="button"
                key={item.key}
                onClick={() => {
                  click(item);
                }}
                disabled={item.disabled}
              >
                {statusMenu.subMenu === item.key && (
                  <hr className="Indicator" />
                )}

                <span
                  className={
                    statusMenu.subMenu !== item.key
                      ? "Text-item-subMenu-Space"
                      : "Text-item-subMenu"
                  }
                  key={item.key}
                >
                  {item.title}{" "}
                </span>
              </button>
            );
          })
        : null}
    </div>
  );
};
export default ItemMenu;
