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

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommonTable from "../CommonTable/CommonTable";
import {
  AddButton,
  LinePortion,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";

const useStyles = makeStyles({
  title: {
    backgroundColor: "red !important",
    height: "80px !important",
  },
  googleBody: {
    backgroundColor: "white",
    height: "700px",
  },
  click: {
    border: "1px solid rgba(0, 0, 0, 0.2) ",
    padding: "20px",
  },
});
const Advertisement = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container lg={12}>
          <Grid container lg={6} className={classes.googleBody}>
            <Grid container lg={12} className={classes.title} p={3}>
              <Grid item lg={6}>
                <Box mt={1}>
                  <Typography>Google Add</Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box textAlign="right">
                  <Switch {...label} defaultChecked />
                </Box>
              </Grid>
              <Grid item lg={12} mt={4}>
                <Typography>Banner Admob ID</Typography>
              </Grid>
              <Grid item lg={12} mt={2}>
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
              <Grid item lg={12} mt={2}>
                <TextField label="banner" variant="outlined" fullWidth />
              </Grid>
              <Grid item lg={12} mt={2}>
                <Box className={classes.click}>
                  <Typography>Inerestical Admob Click</Typography>
                  <TextField
                    label="banner"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid container lg={6}>
            <Typography>Facebook Add</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Advertisement;
