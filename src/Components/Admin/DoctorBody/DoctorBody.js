import {
  Button,
  Container,
  Grid,
  Hidden,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, grid } from "@mui/system";
import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommonTable from "../CommonTable/CommonTable";
import { PortionTitle } from "../../../styles/globalStyled";

const useStyles = makeStyles({
  doctorBottom: {
    borderBottom: "3px solid #258E00",
    width: "60px",
  },
});

const DoctorBody = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container lg={11}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <PortionTitle>Manage Doctor</PortionTitle>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={6} textAlign="right">
          <Button>
            <AddCircleIcon />
            Add Doctor
          </Button>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <CommonTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorBody;
