import React, { Fragment } from "react";
import TransactionContent from "./transaction-content/TransactionContent";
const Transactions = () => {
  return (
    <Fragment>
      <h3 className="transaction-heading">Transactions | This Month</h3>
      <TransactionContent />
    </Fragment>
  );
};

export default Transactions;
