import { Menu } from "@mui/icons-material";
import {
  Grid,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AdminSidebarHome from "../AdminSideBar/AdminSideBarHome/AdminSidebarHome";

const useStyles = makeStyles({
  body: {
    fontSize: 30,
    height: "10vh",
  },
});

const AdminNav = ({ drawerHandler, setOpenDrawer, openDrawer }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.body}>
        <Grid item lg={6}>
          <Typography variant="h6" textAlign="left">
            Hello
          </Typography>
          <Box>
            <Hidden lgUp>
              <IconButton onClick={() => drawerHandler(true)}>
                <Menu />
              </IconButton>
            </Hidden>
          </Box>
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
