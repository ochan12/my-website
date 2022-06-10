import {
  CasesOutlined,
  Code,
  FlightTakeoffOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function DrawerHeader({ ...props }) {
  return <Box {...props}></Box>;
}

interface DrawerItem {
  title: string;
  href: string;
  icon: React.ReactElement;
}
function useDrawerItems(): DrawerItem[] {
  return [
    {
      title: "Home",
      href: "/",
      icon: <HomeOutlined fontSize="small" />,
    },
    {
      title: "Experience",
      href: "/experience",
      icon: <CasesOutlined fontSize="small" />,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: <Code fontSize="small" />,
    },
    {
      title: "Travel",
      href: "/travel",
      icon: <FlightTakeoffOutlined fontSize="small" />,
    },
  ];
}

export default function AppDrawer() {
  const drawerItems = useDrawerItems();
  return (
    <>
      <Drawer variant="permanent" elevation={0}>
        <DrawerHeader>
          <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            className="m-0 p-6"
          >
            <code>{"<> Mateo </>"}</code>
          </Grid>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    <code>{item.title}</code>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
