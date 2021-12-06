import { Grid } from "@mui/material";
import React from "react";
import TotalCountCards from "./TotalCountCards";

const TotalCounts = () => {
  return (
    <div>
      {/* <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <TotalCountCards></TotalCountCards>
        </div>
      </div> */}
      <Grid container spacing={2}>
        <Grid item lg="3">
          <TotalCountCards></TotalCountCards>
        </Grid>
        <Grid item lg="3">
          <TotalCountCards></TotalCountCards>
        </Grid>
        <Grid item lg="3">
          <TotalCountCards></TotalCountCards>
        </Grid>
      </Grid>
    </div>
  );
};

export default TotalCounts;
