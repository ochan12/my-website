import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React, { useMemo, useState } from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export function ThemeWrapper({ children }: { children: any }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log({ mode });
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    []
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
          mode,
          primary: {
            main: "#2E67F8",
            light: "#2E67F8",
            dark: "#EB212E",
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
