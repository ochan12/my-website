import { Box, Grid, Paper, ThemeProvider } from "@mui/material";
import AppDrawer from "components/drawer/Drawer";
import { ColorModeContext, ThemeWrapper } from "components/theme/ThemeWrapper";
import Head from "next/head";
import { useContext } from "react";

export const siteTitle = "Mateo";

export default function Layout({ children, home }: any) {
  const colorMode = useContext(ColorModeContext);
  return (
    <Paper elevation={0} sx={{ borderRadius: 0, height: "100vh" }}>
      <Head>
        <link
          rel="icon"
          href="https://img.icons8.com/color/48/undefined/laptop--v1.png"
        />
        <meta name="description" content="Mateo's personal site" />
        <meta
          property="og:image"
          content={`https://img.icons8.com/color/48/undefined/laptop--v1.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Grid container justifyContent={"space-between"} height={"100%"}>
        <Grid item xs={2}>
          <AppDrawer />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
}
