import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CommonTable from "../CommonTable/CommonTable";
import {
  AddButton,
  PortionButton,
  PortionTitle,
} from "../../../styles/globalStyled";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const DepartmentBody = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      <Grid container lg={11}>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <PortionTitle>Manage Department</PortionTitle>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={6} textAlign="right">
          <PortionButton onClick={handleOpen}>
            <AddCircleIcon />
            Add Department
          </PortionButton>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <CommonTable />
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Box xs={12} mb={5}>
            <PortionTitle variant="h6">Adding Department</PortionTitle>
          </Box>
          <Box xs={12}>
            <TextField
              id="outlined-basic"
              label="Department Name"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ mt: 3 }}
            >
              Upload File
              <input type="file" />
            </Button>
            <Box sx={{ mt: 3 }}>
              <AddButton>Add Department</AddButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DepartmentBody;
