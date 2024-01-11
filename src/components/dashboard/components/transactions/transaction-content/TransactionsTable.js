import React, { Fragment } from "react";
import InfoIcon from "../../../../../assets/InfoIcon";
import TriangleIcon from "../../../../../assets/TriangleIcon";
const TransactionsTable = ({ data }) => {
  return (
    <Fragment>
      <div className="transactions-table-div">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>
                <div className="td-with-icon">
                  Order date
                  <span>
                    <TriangleIcon />
                  </span>
                </div>
              </th>
              <th>Order amount</th>
              <th>
                <div className="td-with-icon">
                  Transaction fees
                  <span>
                    <InfoIcon />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, index) => (
              <tr key={index}>
                <td className="orderId-td">{data.orderId}</td>
                <td>{data.orderDate}</td>
                <td>{data.orderAmount}</td>
                <td>{data.transactionFees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TransactionsTable;
