import { Grid } from "@mui/material";
import React from "react";
import TotalCountCards from "./TotalCountCards";

const TotalCountsRight = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={4}>
        <TotalCountCards></TotalCountCards>
      </Grid>
      <Grid item lg={4} md={4}>
        <TotalCountCards></TotalCountCards>
      </Grid>
      <Grid item lg={4} md={4}>
        <TotalCountCards></TotalCountCards>
      </Grid>
    </Grid>
  );
};

export default TotalCountsRight;
