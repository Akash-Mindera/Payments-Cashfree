import React, { Fragment } from "react";
import MessageIcon from "../../../../assets/MessageIcon";
import PolygonIcon from "../../../../assets/PolygonIcon";
const HeaderControls = () => {
  return (
    <Fragment>
      <div className="header-controls-div">
        <div className="control-cta">
          <MessageIcon />
        </div>
        <div className="control-cta">
          <PolygonIcon />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderControls;
