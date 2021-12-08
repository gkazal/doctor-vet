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
const AboutEditDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <Box mb={5}>
            <PortionTitle variant="h6">Information Edit</PortionTitle>
          </Box>
          <Box mb={2}>
            <Grid container lg={12}>
              <Grid item lg={6} md={6} sm={6}>
                <Typography>Developer & Owened By:</Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={6} textAlign="right">
                <TextField label="Name"></TextField>
              </Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <Grid container lg={12}>
              <Grid item lg={6} md={6} sm={6}>
                <Typography>App Version:</Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={6} textAlign="right">
                <TextField label="Name"></TextField>
              </Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <Typography mb={1}>App Description:</Typography>
            <TextField
              label="Note"
              multiline
              minRows={5}
              maxRows={5}
              fullWidth
            ></TextField>
          </Box>
          <Box mt={5}>
            <Typography>Contact Info:</Typography>
            <Box mt={3}>
              <Grid container lg={12}>
                <Grid item lg={6}>
                  <Typography ml={5}>Phone No:</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Box textAlign="right">
                    <TextField label="phone" fullWidth></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={1}>
              <Grid container lg={12}>
                <Grid item lg={6}>
                  <Typography ml={5}>Email:</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Box textAlign="right">
                    <TextField label="email" fullWidth></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={1}>
              <Grid container lg={12}>
                <Grid item lg={6}>
                  <Typography ml={5}>Website:</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Box textAlign="right">
                    <TextField label="website" fullWidth></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={1}>
              <Grid container lg={12}>
                <Grid item lg={6}>
                  <Typography>Copyright:</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Box textAlign="right">
                    <TextField label="name" fullWidth></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box mt={5}>
              <Grid container lg={12}>
                <Grid item lg={9}></Grid>
                <Grid item lg={3}>
                  <Box textAlign="right">
                    <AddButton fullWidth>Save</AddButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutEditDialog;
