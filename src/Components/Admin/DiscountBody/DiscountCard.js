import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body: {
    backgroundColor: "rgba(37, 142, 0, 0.05)",
    padding: 12,
    textAlign: "center",
    borderRadius: 8,
    border: "1px dashed #000000",
    // width: "100px",
  },
  cardBody: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "12px",
  },
});
const DiscountCard = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container lg={2} md={2} sm={4} xs={12} className={classes.cardBody}>
        <Box>
          <Typography>New User 50% Discount On First Registration</Typography>
        </Box>

        <Grid container lg={12} mt={1}>
          <Grid item lg={8} md={12} sm={12} xs={6}>
            <Typography className={classes.body}>New1000</Typography>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={6} textAlign="right">
            <BorderColorIcon />
            <DeleteIcon sx={{ color: "red" }} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscountCard;
