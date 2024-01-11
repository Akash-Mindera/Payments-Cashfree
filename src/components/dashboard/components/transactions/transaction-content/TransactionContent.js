import React, { Fragment } from "react";
import TransactionFilter from "./TransactionFilter";
import TransactionsTable from "./TransactionsTable";
import { MockData } from "./MockTransactionsData";
import MockPagination from "./MockPagination";
const TransactionContent = () => {
  return (
    <Fragment>
      <div className="transaction-content-div">
        <TransactionFilter />
        <TransactionsTable data={MockData} />
        <MockPagination />
      </div>
    </Fragment>
  );
};

export default TransactionContent;
