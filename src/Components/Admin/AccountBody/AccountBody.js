import { Add } from "@mui/icons-material";
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
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import {
  AddButton,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import TotalCountCards from "../AdminBody/TotalCounts/TotalCountCards";
import CommonTable from "../CommonTable/CommonTable";
import DoctorBody from "../DoctorBody/DoctorBody";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AccountBody = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      <Box pt={5}>
        <Grid container lg={12}>
          <Grid container lg={8} xs={12} spacing={2}>
            <Grid item lg={3} xs={12}>
              <TotalCountCards></TotalCountCards>
            </Grid>
            <Grid item lg={3} xs={12}>
              <TotalCountCards></TotalCountCards>
            </Grid>
            <Grid item lg={3} xs={12}>
              <TotalCountCards></TotalCountCards>
            </Grid>
            <Grid item lg={3} xs={12}>
              <TotalCountCards></TotalCountCards>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}>
        <PortionTitle>Recent Sattlement</PortionTitle>
      </Box>

      <Box>
        {/* <AddUserDialog open={open} setOpen={setOpen}></AddUserDialog> */}
      </Box>
      <Box sx={{ pt: 5 }}>
        <CommonTable />
      </Box>
    </Box>
  );
};

export default AccountBody;
