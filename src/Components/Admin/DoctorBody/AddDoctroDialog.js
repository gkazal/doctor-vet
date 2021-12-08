import React, { useState } from "react";
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
import {
  AddButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import PublishIcon from "@mui/icons-material/Publish";

const AddDoctroDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Box xs={12} mb={5}>
            <PortionTitle variant="h6">Adding Doctor</PortionTitle>
          </Box>
          <Box xs={12}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <Box mt={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Add Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={10}>Frarmer</MenuItem>
                  <MenuItem value={20}>Pet Lover</MenuItem>
                  <MenuItem value={30}>Loyel User</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Mobile No"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Add Degree"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Current Workplace"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Doctor's Fee"
                variant="outlined"
                fullWidth
              />
            </Box>

            <UploadFileButton
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<PublishIcon />}
            >
              Upload Picture
              {/* <input type="file" hidden /> */}
            </UploadFileButton>
            <Box sx={{ mt: 3 }}>
              <AddButton>Add Patient</AddButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDoctroDialog;
