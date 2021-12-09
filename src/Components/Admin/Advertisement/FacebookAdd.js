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
    backgroundColor: "#3B5998!important",
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
  fbTitle: {
    color: "white!important",
  },
});
const FacebookAdd = () => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Box>
        <Grid container lg={12}>
          <Grid container lg={12} className={classes.googleBody}>
            <Grid container lg={12} className={classes.title} p={3}>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box mt={1} className={classes.fbTitle}>
                  <Typography>Facebook AD</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box textAlign="right">
                  <Switch {...label} defaultChecked />
                </Box>
              </Grid>
              <Grid item lg={12} mt={4}>
                <Typography>Banner Facebook ID</Typography>
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
                <Typography>Interestical Facebook ID</Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
                <TextField label="banner" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
                <Box className={classes.click}>
                  <Typography>Inerestical Facebook Click</Typography>
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
      </Box>
    </>
  );
};

export default FacebookAdd;
