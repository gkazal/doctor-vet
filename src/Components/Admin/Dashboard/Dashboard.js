import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import AdminBody from "../AdminBody/AdminBodyHome/AdminBody";
import AdminNav from "../AdminNavbar/AdminNav";
import AdminSidebarHome from "../AdminSideBar/AdminSideBarHome/AdminSidebarHome";

const useStyles = makeStyles({
  sideNav: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
    textAlign: "center",
    marginTop: "30px",
  },
  body: {
    fontSize: 30,
    backgroundColor: "#E5E5E9",
    height: "100vh",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item lg={2} xl={2} md={2} sm={2} xs={2}>
          <Box className={classes.sideNav}>
            <AdminSidebarHome></AdminSidebarHome>
          </Box>
        </Grid>

        <Grid item lg={10} xl={10} md={10} sm={10} xs={10}>
          <Box className={classes.body}>
            <Container maxWidth="xl">
              <AdminNav></AdminNav>
              <AdminBody></AdminBody>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
