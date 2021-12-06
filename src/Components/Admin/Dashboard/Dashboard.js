import React from "react";
import AdminBody from "../AdminBody/AdminBodyHome/AdminBody";
import AdminNav from "../AdminNavbar/AdminNav";

const Dashboard = () => {
  return (
    <div>
      <div className="row ">
        <div
          className="col-lg-2 col-md-2"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h2>SideMenu</h2>
        </div>
        <div
          className="col-lg-10 col-md-10"
          style={{ backgroundColor: "#E5E5E9", height: "100vh" }}
        >
          <div>
            <AdminNav></AdminNav>
          </div>
          <div>
            <AdminBody></AdminBody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
