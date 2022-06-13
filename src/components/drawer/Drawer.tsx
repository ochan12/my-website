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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DrawerItem {
  title: string;
  href: string;
  icon: React.ReactElement;
}

function getIconImage(fileName: string) {
  return (
    <img
      src={`/img/icons/${fileName}.svg`}
      style={{
        maxHeight: 30,
      }}
    />
  );
}

function useDrawerItems(theme: "light" | "dark"): DrawerItem[] {
  return [
    {
      title: "Home",
      href: "/",
      icon: getIconImage(theme === "light" ? "resistance" : "deathStar"),
    },
    {
      title: "Jobs",
      href: "/experience",
      icon: <CasesOutlined fontSize="small" />,
    },
    {
      title: "Skills",
      href: "/skills",
      icon: getIconImage(`lightSaber_${theme}`),
    },
    {
      title: "Travel",
      href: "/travel",
      icon: getIconImage(`spaceship_${theme}`),
    },
  ];
}

export default function AppDrawer() {
  const theme = useTheme();
  const drawerItems = useDrawerItems(theme.palette.mode);
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
            <Link href={item.href} key={item.title}>
              <ListItem disablePadding>
                <ListItemButton sx={{ justifyContent: "center" }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
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
