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
import {
  AddButton,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import { Box } from "@mui/system";

import PublishIcon from "@mui/icons-material/Publish";

const AddUserDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Box xs={12} mb={5}>
            <PortionTitle variant="h6">Adding Patient</PortionTitle>
          </Box>
          <Box xs={12}>
            <TextField
              id="outlined-basic"
              label="User's Name"
              variant="outlined"
              fullWidth
            />
            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                fullWidth
              />
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
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
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

export default AddUserDialog;
