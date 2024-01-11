import React, { Fragment } from "react";
import GlobalSearchBar from "../header/components/global-search/GlobalSearchBar";
import PaymentInfo from "../header/components/payment-info/PaymentInfo";
import HeaderControls from "../header/components/controls/HeaderControls";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <div className="header-div">
        <PaymentInfo />
        <GlobalSearchBar />
        <HeaderControls />
      </div>
    </Fragment>
  );
};

export default Header;
