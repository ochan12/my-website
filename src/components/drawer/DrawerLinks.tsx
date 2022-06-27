import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { getIconImage } from "./Drawer";

interface DrawerItem {
  title: string;
  href: string;
  icon: React.ReactElement;
}

function useDrawerItems(theme: "light" | "dark"): DrawerItem[] {
  return [
    {
      title: "Home",
      href: "/",
      icon: getIconImage(`home_${theme}`),
    },
    {
      title: "Jobs",
      href: "/experience",
      icon: getIconImage(`jobs_${theme}`),
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
    {
      title: "Hobbies",
      href: "/hobbies",
      icon: getIconImage(`hobbies_${theme}`, 30),
    },
  ];
}

export function DrawerLinks() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const drawerItems = useDrawerItems(colorMode.theme);
  const upToMedium = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  return (
    <List role="list">
      {drawerItems.map((item) => (
        <Link href={item.href} key={item.title}>
          <ListItem
            role="listitem"
            sx={{
              color:
                item.href === router?.route
                  ? theme.palette.primary[colorMode.theme]
                  : theme.palette.text.primary,
            }}
          >
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {upToMedium && (
                <ListItemText>
                  <Typography variant="button">{item.title}</Typography>
                </ListItemText>
              )}
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
