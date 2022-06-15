import { CasesOutlined } from "@mui/icons-material";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Link from "next/link";
import { useContext } from "react";

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
      icon: getIconImage(`home_${theme}`),
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
  const colorMode = useContext(ColorModeContext);
  const drawerItems = useDrawerItems(colorMode.theme);
  const upToMedium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      container
      className="border-r-0"
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          className="m-0 p-2 text-ellipsis"
        >
          <Grid item xs={12} textAlign="center">
            <ToggleButtonGroup
              value={colorMode.theme}
              exclusive
              onChange={(event, value) => {
                colorMode.toggleColorMode(value ?? colorMode.theme);
              }}
            >
              <ToggleButton value="light">
                {getIconImage("theme_light")}
              </ToggleButton>
              <ToggleButton value="dark">
                {getIconImage("theme_dark")}
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} textAlign="center">
            {upToMedium ? <code>{"< Mateo />"}</code> : <code>{"< M />"}</code>}
          </Grid>
        </Grid>
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
                      <Typography variant="button">{item.title}</Typography>
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
