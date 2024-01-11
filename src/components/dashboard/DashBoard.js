import React, { Fragment } from "react";
import PageWrapper from "../page-wrapper/PageWrapper";
import OverView from "../dashboard/components/overview/OverView";
import Transactions from "./components/transactions/Transactions";
import "./DashBoard.css";
const Dashboard = () => {
  return (
    <Fragment>
      <PageWrapper>
        <div className="dashboard-div">
          <div className="dashboard-content">
            <OverView />
            <Transactions />
          </div>
        </div>
      </PageWrapper>
    </Fragment>
  );
};

export default Dashboard;
