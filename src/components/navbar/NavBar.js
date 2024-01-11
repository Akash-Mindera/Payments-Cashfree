import React, { Fragment } from "react";
import NavBarHeader from "../navbar/components/navbar-header/NavBarHeader";
import NavBarList from "../navbar/components/navbar-list/NavBarList";
import NavBarCredits from "../navbar/components/navbar-credits/NavBarCredits";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Fragment>
      <div className="navbar-div">
        <div className="navbar-content">
          <NavBarHeader />
          <NavBarList />
          <NavBarCredits />
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
