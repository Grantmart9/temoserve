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
import Logo from "./Icon.svg";
import Button from "@mui/material/Button";


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
    {
      "name": 'Services', "path": "/rent-a-service", "icon": <VolunteerActivismIcon />,
      "submenu":
        [{ "name": 'My Services', "path": "/my-services" },
        { "name": 'Rent A Service', "path": "/rent-a-service" }]
    },
    {
      "name": 'Loyalty Points', "path": "/loyalty", "icon": <CardMembershipIcon />,
      "submenu": []
    },
    {
      "name": 'Tokens', "path": "/tokens", "icon": <QrCodeIcon />,
      "submenu":
        [{ "name": 'My tokens', "path": "/my-tokens" },
        { "name": 'Token History', "path": "/token-history" },
        { "name": 'Scan Token', "path": "/scan-token" },
        ]
    }]

  const SubMenuList = [
    { "name": 'Account', "path": "/account", "icon": <AccountBoxIcon /> },
    { "name": 'Login/Sign Up', "path": "/login", "icon": <LoginIcon /> },
    { "name": 'Logout', "path": "/logout", "icon": <LogoutIcon /> }]

  const DrawerList = (
    <Box
      sx={{ width: 220 }}
      className="bg-gradient-to-br from-blue-950 to-cyan-950 via-cyan-800 bg-repeat-y"
      role="presentation"
      onClick={toggleDrawer(false)}>
      <Button href="/">
        <Image className="flex align-center justify-center" src={Logo} alt={""} />
      </Button>
      <List className="mt-4 mb-3">
        {MenuList.map((menuItem, index) => (
          <ListItem className="grid grid-flow-row gap-0 w-full" key={index} disablePadding>
            <ListItemButton divider={true}
              sx={{
                minWidth: 220,
                color: "whitesmoke",
                '&:hover': {
                  backgroundColor: '#80cae8',
                  color: '#2c6a8a',
                }
              }}
              href={menuItem.path}>
              <ListItemIcon className=" font-sans">
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText className=" font-sans" primary={menuItem.name} />
            </ListItemButton>
            <List className="grid grid-flow-row gap-0">
              {menuItem.submenu.map((submenubutton, index) =>
                <ListItemButton sx={{
                  minWidth: 220,
                  color: "whitesmoke",
                  '&:hover': {
                    backgroundColor: '#80cae8',
                    color: '#2c6a8a',
                  }
                }}
                  key={index}
                  href={submenubutton.path}>
                  <ListItemText className="font-sans" primary={submenubutton.name} />
                </ListItemButton>
              )}
            </List>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="mt-10">
        {SubMenuList.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={menuItem.path}>
              <ListItemIcon className="text-cyan-50 font-sans">
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText className="text-cyan-50 font-sans" primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <html lang="en" className="flex h-full items-center justify-center">
      <body
        className={`${montserrat.className} h-full w-full bg-[url(./background.svg)] bg-fixed`}
      >
        <link href="/dist/styles.css" rel="stylesheet" />
        <div className="z-50 fixed mt-1 ml-1">
          <MenuIconButton toggleDrawer={toggleDrawer(true)} />
        </div>
        <Drawer
          transitionDuration={800}
          disableScrollLock={true}
          variant="temporary"
          elevation={20}
          open={open}
          onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
