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
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
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
const AccountInfoDialogAuth = ({ open, setOpen }) => {
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
          <Grid container lg={12} p={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Payee Name: </ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container lg={12} p={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Payee Bank Name: </ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container lg={12} p={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Payee Branch: </ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container lg={12} p={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Payee Account No: </ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container lg={12} p={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ParagraphBoldText>Check No: </ParagraphBoldText>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="banner"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container lg={12} p={2}>
            <TextField
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              //   maxRows="5"
              minRows="5"
              multiline
              fullWidth
            />
          </Grid>
          <Grid container lg={6} md={6} p={2}>
            <UploadFileButton
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<CloudUploadOutlinedIcon />}
            >
              Upload Recipt/Check Image
              {/* <input type="file" /> */}
            </UploadFileButton>
          </Grid>
          <LinePortion mt={2} />

          <Grid
            container
            lg={12}
            mb={4}
            textAlign="right"
            p={5}
            sx={{ justifyContent: "right" }}
          >
            <AddButton>Authorize</AddButton>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccountInfoDialogAuth;
