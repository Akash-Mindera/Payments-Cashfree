import React, { Fragment } from "react";

const OverViewCard = ({ title, amount }) => {
  return (
    <Fragment>
      <li className="overviewcard-item">
        <div className="overview-card">
          <p className="overview-card-title">{title}</p>
          <p className="overview-card-amount">{amount}</p>
        </div>
      </li>
    </Fragment>
  );
};

export default OverViewCard;
