import { InputBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alpha, Box } from "@mui/system";
import React from "react";
import Search from "@mui/icons-material/Search";
import AdminSideButton from "../AdminSideButton/AdminSideButton";

const useStyles = makeStyles({
  body: {
    fontSize: "18px!important",
    color: "#695CD4",
    fontWeight: "bold!important",
  },
  search: {
    borderRadius: "46px",
    backgroundColor: "rgba(0, 128, 129, 0.09);",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "50px",
    margin: "30px",
  },
  siteButton: {
    margin: "30px",
  },
});

const AdminSidebarHome = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.body}>Doctor Vet..</Typography>
      <Box className={classes.search}>
        <Search></Search>
        <InputBase placeholder="search"></InputBase>
      </Box>
      <Box className={classes.siteButton}>
        <AdminSideButton></AdminSideButton>
      </Box>
    </Box>
  );
};

export default AdminSidebarHome;
