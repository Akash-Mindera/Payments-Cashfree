import React, { Fragment } from "react";
import SearchIcon from "../../../../../assets/SearchIcon";
import SortIcon from "../../../../../assets/SortIcon";
import DownloadIcon from "../../../../../assets/DownloadIcon";
const TransactionFilter = () => {
  return (
    <Fragment>
      <div className="transaction-filter-div">
        <div className="transaction-search-div">
          <SearchIcon />
          <input
            type="text"
            className="transaction-search-input"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="filter-control-div">
          <div className="sort-cta">
            <p className="sort-para">Sort</p>
            <SortIcon />
          </div>
          <div className="download-cta">
            <DownloadIcon />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TransactionFilter;
