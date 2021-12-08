import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

export const PortionTitle = withStyles(() => ({
  root: {
    position: "relative",
    paddingBottom: 5,
    "&::after": {
      position: "absolute",
      content: "''",
      width: "50px",
      height: "5px",
      backgroundColor: "#258E00",
      bottom: 0,
      left: 0,
    },
  },
}))(Typography);
export const PortionButton = withStyles(() => ({
  root: {
    color: "black !important",
    outline: "none !important",
  },
}))(Button);
export const AddButton = withStyles(() => ({
  root: {
    color: "white !important",
    backgroundColor: "#258E00 !important",
    padding: "10px !important",
    borderRadius: "8px !important",
    outline: "none !important",
    fontSize: "14px !important",
    fontWeight: "300!important",
  },
}))(Button);
export const UploadFileButton = withStyles(() => ({
  root: {
    backgroundColor: "white !important",
    color: " #0000008A!important",
    border: "1px dashed rgba(0, 0, 0, 0.5) !important",
    borderRadius: "8px !importan",
    // height: “50px !important”,
    // width: “150px !important”,
    padding: "10px !important",
    cursor: "pointer !important",
    fontSize: "18px !important",
    fontStyle: "normal !important",
    outline: "none !important",
  },
}))(Button);
export const LinePortion = withStyles(() => ({
  root: {
    position: "relative",
    paddingBottom: 15,
    "&::after": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "2px",
      backgroundColor: "#000000",
      opacity: "0.3",
      bottom: 0,
      left: 0,
    },
  },
}))(Typography);
