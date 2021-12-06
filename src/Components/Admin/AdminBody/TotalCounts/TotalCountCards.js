import React from "react";

const TotalCountCards = () => {
  return (
    <div>
      <div className="count-cards">
        <div className="row count-title">
          <p>Total Doctors</p>
        </div>
        <div className="row count-number">
          <p>106</p>
        </div>
        <div className="row" style={{ opacity: "0.6" }}>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};

export default TotalCountCards;
