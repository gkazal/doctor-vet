import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  body: {
    fontSize: 30,
    height: "10vh",
  },
});

const AdminNav = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.body}>
        <Grid item lg={6}>
          <Typography variant="h6" textAlign="left">
            Hello
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h6" textAlign="right">
            Name
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminNav;
