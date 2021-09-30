import React, { useContext } from "react";
import "./ItemMenu.scss";
import { useHistory } from "react-router-dom";
import StoreConstext from "../../Store/Context";

const ItemMenu = ({ item }) => {
  const { statusMenu, setStatusMenu } = useContext(StoreConstext);

  const history = useHistory();

  const clickItemMenu = (path) => {
    setStatusMenu(path);
    history.push(item.path);
  };
  const click = (item) => {
    history.push(item.path, { name: "teste" });
    setStatusMenu(item.path);
    
  };

  return (
    <div className="Container-Itens-Menu">
      <button
        className={
          statusMenu.includes(item.path,0)
            ? "Item-menu-selected"
            : "Item-menu-not-selected"
        }
        type="button"
        key={item.key}
        onClick={() => clickItemMenu(item.path)}
        disabled={item.disabled}
      >
        {" "}
        {console.log(
          statusMenu + " === " + item.path + " ? " + (statusMenu === item.path)
        )}
        <img
          src={statusMenu.includes(item.path,0)? item.iconSelected : item.icon}
          alt={item.key}
        />
        <span className="Text-item-menu" key={item.key}>
          {item.title}
        </span>
      </button>
     
      {statusMenu.includes(item.path,0) && item.subNav
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
                {statusMenu === item.path && (
                  <hr className="Indicator" />
                )}

                <span
                  className={
                    statusMenu !== item.path
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
