import React from "react";
import hello from "../../../../images/Admin/Dashboard/hello.png";
import AppointmentList from "../AppointmentList/AppointmentList";
import TotalCounts from "../TotalCounts/TotalCounts";
import TotalCountsRight from "../TotalCounts/TotalCountsRight";

const AdminBody = () => {
  return (
    <div>
      <div className="d-flex justify-content-start p-3">
        <img src={hello} alt="" />
      </div>
      <div className="d-flex justify-content-start p-3">
        <h2>WelCome To Dahsboard</h2>
      </div>

      <div className="row p-3">
        <div className="col-lg-7 col-md-7 col-sm-7">
          <TotalCounts></TotalCounts>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
          <div>
            <TotalCountsRight></TotalCountsRight>
          </div>
          <div className="mt-5">
            <AppointmentList></AppointmentList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
