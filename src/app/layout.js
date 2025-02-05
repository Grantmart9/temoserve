"use client";
import { ThemeProvider } from "@mui/material";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import theme from "./themeprovider";
import "./globals.css";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from "next/image";

const MenuIconButton = ({ toggleDrawer }) => {
  return (
    <IconButton size="large"
      fullWidth={false}
      className="rounded-full"
      onClick={toggleDrawer}
      sx={{
        backgroundColor: "transparent",
        color: 'gray',
      }}
    >
      <MenuIcon />
    </IconButton>
  )
}

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const MenuList = [
    { "name": 'Home', "path": "/", "icon": <HomeIcon /> },
    { "name": 'Services', "path": "/services", "icon": <VolunteerActivismIcon /> },
    { "name": 'Loyalty Points', "path": "/loyalty", "icon": <CardMembershipIcon /> },
    { "name": 'Tokens', "path": "/tokens", "icon": <QrCodeIcon /> }]

  const SubMenuList = [
    { "name": 'Account', "path": "/account", "icon": <AccountBoxIcon /> },
    { "name": 'History', "path": "/history", "icon": <HistoryIcon /> },
    { "name": 'Login', "path": "/login", "icon": <LoginIcon /> },
    { "name": 'Logout', "path": "/logout", "icon": <LogoutIcon /> }]

  const DrawerList = (
    <Box sx={{ width: 220 }} className="bg-gradient-to-b from-blue-dark to-gray-dark h-screen" role="presentation" onClick={toggleDrawer(false)}>
      <List className="mt-4 mb-3">
        {MenuList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemIcon className="text-gray-light">
                {text.icon}
              </ListItemIcon>
              <ListItemText className="text-gray-light" primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="mt-10">
        {SubMenuList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemIcon className="text-gray">
                {text.icon}
              </ListItemIcon>
              <ListItemText className="text-gray" primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="en" className="flex h-full items-center justify-center">
      <body
        className={`${montserrat.className} h-full w-full bg-gradient-to-br from-gray-medium to-gray-light bg-fixed`}
      >
        <div className="z-50 fixed mt-1 ml-1">
          <MenuIconButton toggleDrawer={toggleDrawer(true)} />
        </div>
        <Drawer transitionDuration={1000} open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
