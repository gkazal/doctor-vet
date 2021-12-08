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
import CommonTable from "../CommonTable/CommonTable";
import {
  AddButton,
  PortionButton,
  PortionTitle,
  UploadFileButton,
} from "../../../styles/globalStyled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddDepartmentDialog from "./AddDepartmentDialog";

const useStyle = makeStyles({
  root: {
    backgroundColor: "white !important",
    color: " black !important",
    border: "1px solid silver !important",
    fontWeight: "bold !important",
    borderRadius: "8px !importan",
    // height: “50px !important”,
    // width: “150px !important”,
    padding: "10px !important",
    marginTop: "30px !important",
    cursor: "pointer !important",
    textAlign: "center !important",
  },
});

const DepartmentBody = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const classes = useStyle();

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
        <Box>
          <AddDepartmentDialog
            open={open}
            setOpen={setOpen}
          ></AddDepartmentDialog>
        </Box>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <CommonTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DepartmentBody;
