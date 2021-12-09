import { Grid, Switch, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AddButton, LinePortion } from "../../../styles/globalStyled";
import AccountInfoDialog from "../AccountBody/AccountInfoDialog";
import AccountInfoDialogAuth from "../AccountBody/AccountInfoDialogAuth";
import AboutEditDialog from "./AboutEditDialog";

const useStyles = makeStyles({
  body: {
    color: "black ",
    fontSize: "18px !important ",
    fontWeight: "500 !important",
  },
  text: {
    border: "none!important",
    backgroundColor: "none!important",
  },
});

const AboutBody = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () =>
    // setOpen(<AboutEditDialog />);
    // setOpen(<AccountInfoDialog />);
    setOpen(<AccountInfoDialogAuth />);

  return (
    <Box mt={5}>
      <Grid container lg={12}>
        <Grid item lg={6}>
          <Box>
            <LinePortion className={classes.body}>System Settings</LinePortion>
          </Box>
          <Box mt={5}>
            <Grid container lg={12}>
              <Grid item lg={6}>
                <Typography>Audio Call</Typography>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Switch {...label} defaultChecked />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={5}>
            <LinePortion className={classes.body}>
              Information Settings
            </LinePortion>
          </Box>
          <Box mt={5}>
            <Grid container lg={12}>
              <Grid item lg={6}>
                <Typography>Deloped & Owened By:</Typography>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Typography className={classes.body}>ProjectX Ltd</Typography>
                </Box>
              </Grid>
            </Grid>
            <LinePortion></LinePortion>
          </Box>
          <Box mt={5}>
            <Grid container lg={12}>
              <Grid item lg={6}>
                <Typography>App Version:</Typography>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Typography>V.101.1</Typography>
                </Box>
              </Grid>
            </Grid>
            <LinePortion></LinePortion>
          </Box>
          <Box mt={5}>
            <Typography>App Description</Typography>
            <Typography mt={3} sx={{ opacity: "0.5" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ea
              sed, quidem, aliquam molestiae quisquam magnam libero sint
              incidunt eius voluptate expedita odio, iusto nobis iure quas aut
              doloremque facilis!
            </Typography>
            <LinePortion></LinePortion>
          </Box>
          <Box mt={5}>
            <Typography>Contact Info</Typography>
            <Grid container lg={12} mt={3}>
              <Grid item lg={6}>
                <Typography ml={5}>Phone No:</Typography>
                <Typography ml={5}>Email:</Typography>
                <Typography ml={5}>Website:</Typography>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Typography>093434</Typography>
                  <Typography>projectx.com.bd@gmail.com</Typography>
                  <Typography>http://project.com.bd</Typography>
                </Box>
              </Grid>
            </Grid>
            <LinePortion></LinePortion>
          </Box>
          <Box mt={5}>
            <Grid container lg={12}>
              <Grid item lg={6}>
                <Typography>Copyright:</Typography>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Typography className={classes.body}>
                    ProjectX Ltd.2021
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <LinePortion></LinePortion>
          </Box>
          <Box mt={5}>
            <AddButton onClick={handleOpen}>Edit Information</AddButton>
          </Box>
        </Grid>
      </Grid>
      <Box>
        {/* <AboutEditDialog open={open} setOpen={setOpen}></AboutEditDialog> */}
        {/* <AccountInfoDialog open={open} setOpen={setOpen}></AccountInfoDialog> */}
        <AccountInfoDialogAuth
          open={open}
          setOpen={setOpen}
        ></AccountInfoDialogAuth>
      </Box>
    </Box>
  );
};

export default AboutBody;
