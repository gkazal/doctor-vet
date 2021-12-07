import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TotalCountCards from "./TotalCountCards";

const TotalCounts = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default TotalCounts;
