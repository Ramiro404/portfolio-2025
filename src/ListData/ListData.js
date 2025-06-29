import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";
import './ListData.css';

export function ListData() {
  return (
    <React.Fragment>
      <div className="list-data">
        <List sx={{ width: 1, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className="no-select"
              primary="EMAIL"
              secondary="ramirocruznavarro@hotmail.com"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CakeOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="BIRTHDAY" secondary="June 19, 1999" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="LOCATION" secondary="Comalcalco, Tab, MX" />
          </ListItem>
        </List>
      </div>
      <Box
        className="list-socialmedia"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
            color: "text.secondary",
            "& svg": {
              m: 1,
            },
          }}
        >
          <IconButton href="https://www.linkedin.com/in/ramiro-de-la-cruz-navarro/" color="primary" target="_blank" size="large">
            <LinkedInIcon fontSize="inherit"/>
          </IconButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton  href="https://github.com/Ramiro404" target="_blank" size="large">
            <GitHubIcon fontSize="inherit"/>
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
