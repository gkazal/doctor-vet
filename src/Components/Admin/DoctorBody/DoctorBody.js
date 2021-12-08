import {
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, grid } from "@mui/system";
import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommonTable from "../CommonTable/CommonTable";
import {
  AddButton,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import AddDoctroDialog from "./AddDoctroDialog";
import DoctorProfileDialog from "./DoctorProfileDialog";

const DoctorBody = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(<AddDoctroDialog />);

  return (
    <Box>
      <Grid container lg={11}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <PortionTitle>Manage Doctor</PortionTitle>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={6} textAlign="right">
          <PortionButton onClick={handleOpen}>
            <AddCircleIcon />
            Add Doctor
          </PortionButton>
        </Grid>
        <Box>
          {/* <AddDoctroDialog open={open} setOpen={setOpen}></AddDoctroDialog> */}
          <DoctorProfileDialog
            open={open}
            setOpen={setOpen}
          ></DoctorProfileDialog>
        </Box>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <CommonTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorBody;
