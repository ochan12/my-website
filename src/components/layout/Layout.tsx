import { Grid, Paper, useTheme } from "@mui/material";
import AppDrawer from "components/drawer/Drawer";
import Head from "next/head";
import React from "react";

export const siteTitle = "Mateo";

export default function Layout({ children, home }: any) {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0,
        minHeight: "100vh",
      }}
    >
      <Grid container justifyContent={"space-between"}>
        <Grid size={{ xs: 2 }}>
          <AppDrawer />
        </Grid>
        <Grid
          size={{ xs: 10 }}
          marginTop={10}
          sx={{
            minHeight: "100vh",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
}
