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
import "./UserBody.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddUserDialog from "./AddUserDialog";
import UserProfileDialog from "./UserProfileDialog";
const UserBody = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      <PortionTitle>Manage Patient</PortionTitle>

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
          </Grid>

          <Grid item lg={4} textAlign="right">
            <PortionButton onClick={handleOpen} sx={{ mt: "58px" }}>
              <AddCircleIcon />
              Add Patient
            </PortionButton>
          </Grid>
        </Grid>
      </Box>

      <Box>
        {/* <AddUserDialog open={open} setOpen={setOpen}></AddUserDialog> */}
        <UserProfileDialog open={open} setOpen={setOpen}></UserProfileDialog>
      </Box>
      <Box sx={{ pt: 5 }}>
        <CommonTable />
      </Box>
    </Box>
  );
};

export default UserBody;
