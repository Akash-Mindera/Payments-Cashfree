import React, { Fragment } from "react";
import StoreLogo from "../../../../assets/StoreLogo";
import VectorDown from "../../../../assets/VectorDown";
import "./NavBarHeader.css";
const NavBarHeader = () => {
  return (
    <Fragment>
      <div className="navbar-header-content">
        <div className="store-logo-text">
          <StoreLogo />
          <div>
            <h2 className="store-name">Nishyan</h2>
            <span className="store-link">Visit store</span>
          </div>
        </div>
        <VectorDown />
      </div>
    </Fragment>
  );
};

export default NavBarHeader;
