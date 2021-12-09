import { Button, Grid, Switch, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#000000!important",
    height: "80px !important",
    padding: "30px!important",
  },
  fileButton: {
    border: "1px dashed #000000 !important",
    borderRadius: "8px !important",
    width: "100% !important",
    height: "118px !important",
    marginBottom: "30px!important",
    color: "black !important",
    opacity: "0.6 !important",
  },
  startupTitle: {
    color: "white!important",
    fontSize: "18px!important",
    fontWeight: "500!important",
  },
});
const StartupAd = () => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <Grid container lg={12}>
        <Grid container lg={12} className={classes.title}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className={classes.startupTitle}>Startup AD</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6} textAlign="right" mt={-1}>
            <Switch {...label} defaultChecked />
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "30px" }} spacing={5}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Typography>Startup AD Link</Typography>
            <TextField
              id="outlined-basic"
              label="banner"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StartupAd;
