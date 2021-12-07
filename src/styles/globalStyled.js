import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

export const PortionTitle = withStyles(() => ({
  root: {
    position: "relative",
    paddingBottom: 5,
    "&::after": {
      position: "absolute",
      content: "''",
      width: "60px",
      height: "3px",
      backgroundColor: "#258E00",
      bottom: 0,
      left: 0,
    },
  },
}))(Typography);
export const PortionButton = withStyles(() => ({
  root: {
    color: "black !important",
  },
}))(Button);
export const AddButton = withStyles(() => ({
  root: {
    color: "white !important",
    backgroundColor: "#258E00 !important",
    padding: "10px !important",
    borderRadius: "8px !important",
  },
}))(Button);
