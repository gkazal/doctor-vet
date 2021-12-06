import React from "react";
import TotalCountCards from "./TotalCountCards";

const TotalCountsRight = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <TotalCountCards></TotalCountCards>
        </div>
      </div>
    </div>
  );
};

export default TotalCountsRight;
