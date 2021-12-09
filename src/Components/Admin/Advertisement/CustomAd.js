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
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#E34133!important",
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
  customTitle: {
    color: "white!important",
    fontSize: "18px!important",
    fontWeight: "500!important",
  },
});
const CustomAd = () => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Grid container lg={12}>
        <Grid container lg={12} className={classes.title}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className={classes.customTitle}>Custom AD</Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6} textAlign="right" mt={-1}>
            <Switch {...label} defaultChecked />
          </Grid>
        </Grid>
        <Grid container sx={{ padding: "30px" }} spacing={5}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Grid item lg={6} md={8} sm={8} xs={12}>
              <Button
                className={classes.fileButton}
                startIcon={<ImageOutlinedIcon />}
              >
                Add Banner Image
              </Button>
            </Grid>
            <Typography>Banner AD Link</Typography>
            <TextField
              id="outlined-basic"
              label="banner"
              variant="outlined"
              fullWidth
            />
            <Grid item lg={6} md={8} sm={8} xs={12} mt={2}>
              <Button
                className={classes.fileButton}
                startIcon={<ImageOutlinedIcon />}
              >
                Add Banner Image
              </Button>
            </Grid>
            <Typography>Banner AD Link</Typography>
            <TextField
              id="outlined-basic"
              label="banner"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Grid item lg={6} md={8} sm={8} xs={12}>
              <Button
                className={classes.fileButton}
                startIcon={<ImageOutlinedIcon />}
              >
                Add Banner Image
              </Button>
            </Grid>
            <Typography>Interestical AD Link</Typography>
            <TextField
              id="outlined-basic"
              label="banner"
              variant="outlined"
              fullWidth
            />
            <Typography mt={2}>Interestical AD Click</Typography>
            <TextField
              id="outlined-basic"
              label="banner"
              variant="outlined"
              fullWidth
            />
            <Typography mt={2}>
              Interestical AD Per Minute (While Waiting On Call)
            </Typography>
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

export default CustomAd;
