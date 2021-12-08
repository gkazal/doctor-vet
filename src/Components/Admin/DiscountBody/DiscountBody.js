import {
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
import DiscountCard from "./DiscountCard";
import AddDiscountDialog from "./AddDiscountDialog";

const useStyles = makeStyles({
  body: {
    fontWeight: "500 !important",
  },
});
const DiscountBody = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(<AddDiscountDialog />);

  return (
    <Box>
      <Grid container lg={12}>
        <Grid item lg={2} md={2} sm={6} xs={6} mt={1}>
          <PortionTitle>Discount</PortionTitle>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={6}>
          <PortionButton onClick={handleOpen}>
            <AddCircleIcon />
            Add Discount
          </PortionButton>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <Box mb={2}>
            <Typography className={classes.body}>Sign Up Discount</Typography>
          </Box>
          <Box>
            <DiscountCard></DiscountCard>
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pt: 5 }}>
          <Box mb={2}>
            <Typography className={classes.body}>Discount For All</Typography>
          </Box>
          <Box>
            <DiscountCard></DiscountCard>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <AddDiscountDialog open={open} setOpen={setOpen}></AddDiscountDialog>
      </Box>
    </Box>
  );
};

export default DiscountBody;
