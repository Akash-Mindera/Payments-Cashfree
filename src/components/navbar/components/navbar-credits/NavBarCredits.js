import React, { Fragment } from "react";
import Wallet from "../../../../assets/Wallet";
const NavBarCredits = () => {
  return (
    <Fragment>
      <div className="navbar-credit-div">
        <div className="walletIcon-div">
          <Wallet />
        </div>
        <div className="wallet-details-div">
          <p className="credits-title">Available credits</p>
          <span className="credit-amount">222.10</span>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBarCredits;
