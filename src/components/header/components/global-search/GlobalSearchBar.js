import React, { Fragment } from "react";
import SearchIcon from "../../../../assets/SearchIcon";
const GlobalSearchBar = () => {
  return (
    <Fragment>
      <div className="global-search-div">
        <SearchIcon />
        <input
          type="text"
          className="global-search-input"
          placeholder="Search features, tutorials, etc."
        />
      </div>
    </Fragment>
  );
};

export default GlobalSearchBar;
