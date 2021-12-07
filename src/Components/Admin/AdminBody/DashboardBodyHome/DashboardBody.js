import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import hello from "../../../../images/Admin/Dashboard/hello.png";
import AppointmentList from "../AppointmentList/AppointmentList";
import TotalCounts from "../TotalCounts/TotalCounts";
import TotalCountsRight from "../TotalCounts/TotalCountsRight";

const DashboardBody = () => {
  return (
    <>
      <Box>
        <img src={hello} alt="" />
      </Box>
      <Box>
        <Typography variant="h5">WelCome To Dashboard</Typography>
      </Box>

      <Grid container sx={{ pt: 5 }} spacing={2}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <TotalCounts></TotalCounts>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box>
            <TotalCountsRight></TotalCountsRight>
          </Box>
          <Box sx={{ pt: 5 }}>
            <AppointmentList></AppointmentList>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardBody;
