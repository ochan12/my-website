import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useMemo, useState } from "react";

export const ColorModeContext = React.createContext<{
  toggleColorMode: (newMode: "dark" | "light") => void;
  theme: "dark" | "light";
}>({
  toggleColorMode: () => {},
  theme: "light",
});

export const DARK_PRIMARY_COLOR = "#EB212E";
export const LIGHT_PRIMARY_COLOR = "#2E67F8";

export function ThemeWrapper({ children }: { children: any }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (newMode: "dark" | "light") => {
        setMode(newMode);
      },
      theme: mode,
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            "Poppins",
            "Nunito",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
          ].join(","),
        },
        palette: {
          mode: mode,
          primary: {
            main: "#2E67F8",
            light: LIGHT_PRIMARY_COLOR,
            dark: DARK_PRIMARY_COLOR,
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        {children}
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
