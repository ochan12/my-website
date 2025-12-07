import React from "react";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import { useContext } from "react";
import { getIconImage } from "./Drawer";

export function DrawerHeader() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const upToMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"space-around"}
      spacing={1}
      className="m-4 text-ellipsis"
    >
      <Grid size={{ xs: 12 }} textAlign="center">
        <ToggleButtonGroup
          value={colorMode.theme}
          exclusive
          onChange={(event, value) => {
            colorMode.toggleColorMode(value ?? colorMode.theme);
          }}
        >
          <ToggleButton value="light">
            {getIconImage("theme_light", 50)}
          </ToggleButton>
          <ToggleButton value="dark">
            {getIconImage("theme_dark", 50)}
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid size={{ xs: 12 }} textAlign="center">
        <code
          role="HeaderName"
          className="align-middle font-star-wars hover:font-sans transition-all duration-300"
        >
          {upToMedium ? "< Mateo />" : "< M />"}
        </code>
      </Grid>
    </Grid>
  );
}
