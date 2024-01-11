import React, { Fragment } from "react";
import Select from "react-select";
import OverViewCard from "./OverViewCard";
import { MockData } from "./MockOverViewData";
const OverView = () => {
  const options = [
    { value: "This Month", label: "This Month" },
    { value: "Last Month", label: "Last Month" },
  ];

  return (
    <Fragment>
      <div className="overview-div">
        <h2 className="overview-title">Overview</h2>
        <Select
          options={options}
          className="overview-dropdown"
          defaultValue={{ value: "This Month", label: "This Month" }}
        />
      </div>
      <div className="overview-content">
        <ul className="overview-list">
          {MockData.map((data) => (
            <OverViewCard
              title={data.title}
              amount={data.amount}
              key={data.title}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default OverView;
