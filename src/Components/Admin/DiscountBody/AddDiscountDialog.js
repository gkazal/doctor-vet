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

const AddDiscountDialog = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogContent>
          <Box xs={12} mb={5}>
            <Typography textAlign="center" variant="h6">
              Add Discount
            </Typography>
          </Box>
          <Box xs={12}>
            <TextField
              id="outlined-basic"
              label="Discount Title"
              variant="outlined"
              fullWidth
            />
            <Box mt={3}>
              <UploadFileButton
                variant="outlined"
                component="label"
                fullWidth
                startIcon={<PublishIcon />}
              >
                Upload Image
                {/* <input type="file" hidden /> */}
              </UploadFileButton>
            </Box>
            <Box mt={3}>
              <TextField
                label="Write Discount Code"
                variant="outlined"
                fullWidth
              />
            </Box>

            <Box mt={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">New User</InputLabel>
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
                label="Discount Description"
                multiline
                minRows={8}
                fullWidth
              ></TextField>
            </Box>

            <Box mt={3}>
              <AddButton sx={{ width: "100px" }}>Add </AddButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDiscountDialog;
