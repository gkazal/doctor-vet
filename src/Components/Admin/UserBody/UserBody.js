import { Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { PortionTitle } from "../../../styles/globalStyled";
import TotalCountCards from "../AdminBody/TotalCounts/TotalCountCards";
import CommonTable from "../CommonTable/CommonTable";
import DoctorBody from "../DoctorBody/DoctorBody";
import "./UserBody.css";

const UserBody = () => {
  return (
    <Box>
      <PortionTitle>Manage Patient</PortionTitle>

      <Box sx={{ pt: 5 }}>
        <Grid container lg={6} xs={6} spacing={2}>
          <Grid item lg={3} xs={12}>
            <TotalCountCards></TotalCountCards>
          </Grid>
          <Grid item lg={3} xs={12}>
            <TotalCountCards></TotalCountCards>
          </Grid>
          <Grid item lg={3} xs={12}>
            <TotalCountCards></TotalCountCards>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pt: 5 }}>
        <CommonTable />
      </Box>
    </Box>
  );
};

export default UserBody;
