import React from "react";

const NavBarListItem = ({ icon, name, style }) => {
  return (
    <li>
      <div className="navbarList-item" style={style}>
        {icon}
        <p className="navBarList-item-p">{name}</p>
      </div>
    </li>
  );
};

export default NavBarListItem;
