import React, { Fragment } from "react";
import HelpIcon from "../../../../assets/HelpIcon";
const PaymentInfo = () => {
  return (
    <Fragment>
      <div className="payment-info-div">
        <p className="payment-para">Payments</p>
        <div className="howItWorks-div">
          <HelpIcon />
          <p className="help-para">How it works</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentInfo;
