import React, { Fragment } from "react";
import NavBar from "../navbar/NavBar";
import Header from "../header/Header";
import "./PageWrapper.css";
const PageWrapper = ({ children }) => {
  return (
    <Fragment>
      <div className="pagewrapper-div">
        <div className="pagewrapper-div-left">
          <NavBar />
        </div>
        <div className="pagewrapper-div-right">
          <Header />
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default PageWrapper;
