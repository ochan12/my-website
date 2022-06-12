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
  useMediaQuery,
  useTheme,
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
      title: "Jobs",
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
  const theme = useTheme();
  const upToMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container className="border-r-0" flexDirection={"column"}>
      <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        className="m-0 p-2 text-ellipsis"
      >
        {upToMedium ? <code>{"< Mateo />"}</code> : <code>{"< M />"}</code>}
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <List>
          {drawerItems.map((item) => (
            <Link
              href={item.href}
              key={item.title}
            >
              <ListItem disablePadding >
                <ListItemButton sx={{ justifyContent: "center" }}>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    {item.icon}
                  </ListItemIcon>
                  {upToMedium && (
                    <ListItemText>
                      <code>{item.title}</code>
                    </ListItemText>
                  )}
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
