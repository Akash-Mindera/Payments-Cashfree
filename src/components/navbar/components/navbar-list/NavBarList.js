import React, { Fragment } from "react";
import NavBarListItem from "./NavBarListItem";
import { MockData } from "./NavBarListMockData";
const NavBarList = () => {
  return (
    <Fragment>
      <div className="navBarList-div">
        <ul className="navBarList-ul">
          {MockData.map((data) => (
            <NavBarListItem
              icon={data.icon}
              name={data.name}
              key={data.name}
              style={data.style}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default NavBarList;
