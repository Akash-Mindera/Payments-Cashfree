import React, { Fragment } from "react";
import ChevronLeft from "../../../../../assets/ChevronLeft";
import ChevronRight from "../../../../../assets/ChevronRight";

const MockPageNumber = [
  { page: 1 },
  { page: "..." },
  { page: 10, style: { background: "#146EB4", color: "#fff" } },
  { page: 11 },
  { page: 12 },
  { page: 13 },
  { page: 14 },
  { page: 15 },
  { page: 16 },
  { page: 17 },
  { page: 18 },
];

const MockPagination = () => {
  return (
    <Fragment>
      <div className="mockPagination-div">
        <div className="pagination-cta">
          <ChevronLeft />
          <p className="pag-cta-text">Previous</p>
        </div>
        <div className="pag-number-div">
          <ul>
            {MockPageNumber.map((pageNo) => (
              <li>
                <div className="pag-number-item" style={pageNo.style}>
                  <p className="page-number-para">{pageNo.page}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination-cta">
          <p className="pag-cta-text">Next</p>
          <ChevronRight />
        </div>
      </div>
    </Fragment>
  );
};

export default MockPagination;
