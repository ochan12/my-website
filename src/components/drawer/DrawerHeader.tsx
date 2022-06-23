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
import style from "./Drawer.module.scss";

export function DrawerHeader() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const upToMedium = useMediaQuery(theme.breakpoints.up("md"));
  return (
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
            {getIconImage("theme_light", 50)}
          </ToggleButton>
          <ToggleButton value="dark">
            {getIconImage("theme_dark", 50)}
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <code role="HeaderName" className={style.starWarsGlyph}>
          {upToMedium ? "< Mateo />" : "< M />"}
        </code>
      </Grid>
    </Grid>
  );
}
