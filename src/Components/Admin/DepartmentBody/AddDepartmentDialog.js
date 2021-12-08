import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddButton,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const AddDepartmentDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
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
            <UploadFileButton variant="outlined" component="label" fullWidth>
              Upload Icon
              <input type="file" />
            </UploadFileButton>
            <Box sx={{ mt: 3 }}>
              <AddButton>Add Department</AddButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDepartmentDialog;
