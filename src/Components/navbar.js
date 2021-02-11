import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="title" color="inherit">
            HypeCar Sample Presentation <DriveEtaIcon />
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;
