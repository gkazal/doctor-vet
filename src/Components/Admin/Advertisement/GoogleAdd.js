import React from "react";
import {
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

const useStyles = makeStyles({
  title: {
    backgroundColor: "#E34133!important",
    height: "80px !important",
  },
  googleBody: {
    backgroundColor: "white",
    height: "800px",
  },
  click: {
    border: "1px solid rgba(0, 0, 0, 0.2) ",
    padding: "20px",
  },
  googleTitle: {
    color: "white!important",
    fontSize: "18px!important",
    fontWeight: "500!important",
  },
});
const GoogleAdd = () => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Grid container lg={12}>
        <Grid container lg={12} className={classes.googleBody}>
          <Grid container lg={12} className={classes.title} p={3}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Box mt={1} className={classes.googleTitle}>
                <Typography>Google AD</Typography>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Box textAlign="right">
                <Switch {...label} defaultChecked />
              </Box>
            </Grid>
            <Grid item lg={12} mt={4}>
              <Typography>Banner Admob ID</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={12} mt={4}>
              <Typography>Interestical Admob ID</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <TextField label="banner" variant="outlined" fullWidth />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Box className={classes.click}>
                <Typography>Inerestical Admob Click</Typography>
                <TextField
                  label="banner"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Box className={classes.click}>
                <Typography>
                  Inerestical AD Per Min (While Waiting On Call)
                </Typography>
                <TextField
                  label="banner"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Box>
            </Grid>
            <Grid item lg={12} mt={4}>
              <Typography>Native Admob ID</Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <TextField label="banner" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GoogleAdd;
