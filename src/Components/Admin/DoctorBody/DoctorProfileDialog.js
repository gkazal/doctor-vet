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
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  PortionTitle,
  UploadFileButton,
  AddButton,
} from "../../../styles/globalStyled";
import TotalCountCards from "../AdminBody/TotalCounts/TotalCountCards";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body: {
    backgroundColor: "rgba(37, 142, 0, 0.05)",
    padding: 12,
    textAlign: "left",
    borderRadius: 8,
  },
  cardBodyNumber: {
    fontWeight: "bold!important ",
    fontSize: "24px!important",
  },
  cardBodyFooter: {
    opacity: "0.6",
    fontSize: "10px !important",
    color: "black !important",
    padding: "0 !important",
  },
});
const DoctorProfileDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Box xs={12} mb={5}>
            <PortionTitle variant="h6">Doctor Profile</PortionTitle>
          </Box>
          <Box>
            <Grid container lg={12}>
              <Grid item lg={6} md={6} sm={6} className={classes.body}>
                <Typography>Total Earning</Typography>
                <Typography className={classes.cardBodyNumber}>5444</Typography>
                <Button className={classes.cardBodyFooter}>View Details</Button>
              </Grid>
              <Grid item lg={6} md={6} sm={6} textAlign="right">
                Image
              </Grid>
            </Grid>
          </Box>
          <Box xs={12} mt={5}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Name</span> : Dr. John
            </Typography>
            <Typography mt={2}>
              <span style={{ fontWeight: "bold" }}>Department</span> : Cow
              Expert
            </Typography>
            <Typography mt={2}>
              <span style={{ fontWeight: "bold" }}>Mobile Number</span> : 092887
            </Typography>
            <Typography mt={2}>
              <span style={{ fontWeight: "bold" }}>Current Workplace</span> :
              Project X Hospital Dhaka
            </Typography>
            <Typography mt={2}>
              <span style={{ fontWeight: "bold" }}>Degree</span> :
            </Typography>
            <Typography mt={2}>
              <span style={{ fontWeight: "bold" }}>Account Created</span> : 8
              Dec 2021
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DoctorProfileDialog;
