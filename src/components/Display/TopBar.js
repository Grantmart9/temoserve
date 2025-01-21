import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TokenIcon from "@mui/icons-material/Token";
import { Size } from "media-query";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuIcon from '@mui/icons-material/Menu';

export const TopBar = ({ setTopBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  const actions = [
    { icon: <HomeIcon />, name: "Home", path: "/" },
    { icon: <TokenIcon />, name: "Tokens", path: "/deals" },
    { icon: <LoyaltyIcon />, name: "T Points", path: "/contact" },
    { icon: <AccountCircleIcon />, name: "Account", path: "/login" },
  ];
  return (
    <Fade timeout={500} in={true}>
      <AppBar
        position="fixed"
        elevation={1}
        className="bg-gradient-to-r from-green to-blue"
      >
        {isResponsiveSize ? (
          <Toolbar disableGutters>
            <Container></Container>
            <SpeedDial
              FabProps={{ size: "small" }}
              ariaLabel="SpeedDial Menu"
              icon={<MenuIcon style={{ color: "whitesmoke" }} />}
              transitionDuration={800}
              direction="left"
              sx={{ marginRight: "5pt" }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  href={action.path}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Toolbar>
        ) : (
          <Toolbar disableGutters>
            <Tooltip title="Menu"></Tooltip>
            <SpeedDial
              FabProps={{ size: "medium", color: "default" }}
              ariaLabel="SpeedDial Menu"
              icon={<MenuIcon />}
              transitionDuration={800}
              direction="down"
              sx={{ marginRight: "5pt", color: "white" }}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  href={action.path}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
            <Container></Container>
          </Toolbar>
        )}
      </AppBar>
    </Fade>
  );
};
