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
import { Box } from "@mui/system";
import {
  PortionTitle,
  UploadFileButton,
  AddButton,
  LinePortion,
  ParagraphBoldText,
} from "../../../styles/globalStyled";
import TotalCountCards from "../AdminBody/TotalCounts/TotalCountCards";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    backgroundColor: "#258E00!important",
    height: "80px !important",
    padding: "30px!important",
    textAlign: "center !important",
    color: "white",
  },
  greenFont: {
    color: "#258E00!important",
    fontWeight: "500 !important",
  },
});
const AccountInfoDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <Box>
            <Typography className={classes.title}>
              Account Information
            </Typography>
          </Box>
          <Grid container lg={12} p={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Doctor's Name: </ParagraphBoldText>
              <ParagraphBoldText mt={2}>Address:</ParagraphBoldText>
              <ParagraphBoldText mt={2}>Phone:</ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Accout's Holder Name:</ParagraphBoldText>
              <ParagraphBoldText mt={2}>Accout's Type:</ParagraphBoldText>
              <ParagraphBoldText mt={2}>Accout No:</ParagraphBoldText>
            </Grid>
          </Grid>
          <LinePortion mt={5} />
        </DialogContent>
        <Grid container lg={12} mb={4}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className={classes.greenFont} textAlign="right">
              Total Payable:
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography className={classes.greenFont} textAlign="center">
              80,0000.00
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          mb={4}
          textAlign="right"
          p={5}
          sx={{ justifyContent: "right" }}
        >
          <AddButton>Initial Transfer</AddButton>
        </Grid>
      </Dialog>
    </>
  );
};

export default AccountInfoDialog;
