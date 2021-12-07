import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles({
  body: {
    backgroundColor: "white",
    padding: 12,
    textAlign: "left",
    borderRadius: 20,
  },
  cardBodyNumber: {
    color: "#258E00",
    fontWeight: "bold!important ",
    fontSize: "24!important",
  },
  cardBodyFooter: {
    opacity: "0.6",
  },
});
const TotalCountCards = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.body}>
        <Typography>Total Doctors</Typography>
        <Typography className={classes.cardBodyNumber}>106</Typography>
        <Typography className={classes.cardBodyFooter}>View All</Typography>
      </Box>
    </Box>
  );
};

export default TotalCountCards;
