import React from "react";
import "./TotalCount.css";
import TotalCountCards from "./TotalCountCards";

const TotalCounts = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
      </div>
    </div>
  );
};

export default TotalCounts;
