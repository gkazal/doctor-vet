import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, grid } from "@mui/system";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommonTable from "../CommonTable/CommonTable";
import {
  AddButton,
  LinePortion,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import GoogleAdd from "./GoogleAdd";
import FacebookAdd from "./FacebookAdd";
import CustomAd from "./CustomAd";
import StartupAd from "./StartupAd";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#DA0F0F !important",
    color: "white!important",
    borderRadius: "8px!important",
    padding: "20px!important",
    width: "252px!important",
  },
  addManage: {
    position: "relative",
    paddingBottom: 5,
    color: "#E34133 !important",
    fontWeight: "600!important",
    marginBottom: "20px !important",

    "&::after": {
      position: "absolute",
      content: "''",
      width: "50px",
      height: "5px",
      backgroundColor: "#E34133",
      bottom: 0,
      left: 0,
    },
  },
});

const Advertisement = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container lg={12} spacing={0}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.addManage}>Add Manage</Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <GoogleAdd />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <FacebookAdd />
        </Grid>
      </Grid>
      <Grid container lg={12} mt={3}>
        <CustomAd />
      </Grid>
      <Grid container lg={12} mt={3}>
        <StartupAd />
      </Grid>
      <Grid container lg={12} mt={5} sx={{ justifyContent: "center" }}>
        <Box>
          <Button className={classes.btn}>Save</Button>
        </Box>
      </Grid>
    </>
  );
};

export default Advertisement;
