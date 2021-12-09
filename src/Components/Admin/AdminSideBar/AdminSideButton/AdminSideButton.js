import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dashboard from "../../../../images/sidebar/dashboard.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import department from "../../../../images/sidebar/department.svg";
import doctor from "../../../../images/sidebar/doctor.svg";
import account from "../../../../images/sidebar/account.svg";
import discount from "../../../../images/sidebar/discount.svg";
import aboutapp from "../../../../images/sidebar/aboutapp.svg";
import "./AdminSideButton.css";

import Collapse from "@mui/material/Collapse";
const AdminSideButton = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List className="icon">
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={dashboard} alt="" />
            </ListItemIcon>

            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={department} alt="" />
            </ListItemIcon>
            <ListItemText primary="Department" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={doctor} alt="" />
            </ListItemIcon>
            <ListItemText primary="Doctor" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <img src={account} alt="" />
            </ListItemIcon>
            <ListItemText primary="Account" />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <FiberManualRecordIcon sx={{ fontSize: "7px" }} /> */}
              </ListItemIcon>
              <ListItemText primary="Payment Creation" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <FiberManualRecordIcon sx={{ fontSize: "7px" }} /> */}
              </ListItemIcon>
              <ListItemText primary="Authorization" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={discount} alt="" />
            </ListItemIcon>
            <ListItemText primary="Discount" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <img src={aboutapp} alt="" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default AdminSideButton;
