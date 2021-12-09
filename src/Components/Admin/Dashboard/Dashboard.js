import {
  Container,
  Grid,
  Hidden,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AboutBody from "../AboutBody/AboutBody";
import AccountBody from "../AccountBody/AccountBody";
import DashboardBody from "../AdminBody/DashboardBodyHome/DashboardBody";
import AdminNav from "../AdminNavbar/AdminNav";
import AdminSidebarHome from "../AdminSideBar/AdminSideBarHome/AdminSidebarHome";
import Advertisement from "../Advertisement/Advertisement";
import DepartmentBody from "../DepartmentBody/DepartmentBody";
import DiscountBody from "../DiscountBody/DiscountBody";
import DoctoryBody from "../DoctorBody/DoctorBody";
import UserBody from "../UserBody/UserBody";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
    // minHeight: "100vh",
  },
  sideNav: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    textAlign: "center",
    marginTop: "30px",
  },
  body: {
    fontSize: 30,
    backgroundColor: "#F5F5F7",
    height: "100%",
  },
  fullHeight: {
    height: "100%",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerHandler = (state) => {
    setOpenDrawer(state);
  };
  return (
    <Box className={classes.wrapper}>
      <Grid
        container
        spacing={0}
        alignItems="stretch"
        className={classes.fullHeight}
      >
        <Hidden lgDown>
          <Grid
            item
            lg={2}
            xl={2}
            md={2}
            sm={2}
            xs={2}
            className={classes.fullHeight}
          >
            <Box className={classes.sideNav}>
              <AdminSidebarHome></AdminSidebarHome>
            </Box>
          </Grid>
        </Hidden>

        <SwipeableDrawer
          anchor="left"
          open={openDrawer}
          onClose={() => drawerHandler(false)}
          onOpen={() => drawerHandler(true)}
        >
          <Box className={classes.sideNav}>
            <AdminSidebarHome></AdminSidebarHome>
          </Box>
        </SwipeableDrawer>

        <Grid
          item
          lg={10}
          xl={10}
          md={12}
          sm={12}
          xs={12}
          className={classes.fullHeight}
        >
          <Box className={classes.body}>
            <Container maxWidth="xl">
              <AdminNav drawerHandler={drawerHandler}></AdminNav>
              {/* <DashboardBody></DashboardBody> */}

              {/* <DoctoryBody /> */}
              {/* <UserBody></UserBody> */}
              {/* <AccountBody></AccountBody> */}

              {/* <DepartmentBody></DepartmentBody> */}
              <AboutBody></AboutBody>
              {/* <DiscountBody></DiscountBody> */}
              {/* <Advertisement></Advertisement> */}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
