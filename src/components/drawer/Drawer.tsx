import React from "react";
import { Divider, Grid } from "@mui/material";
import Image from "next/image";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerLinks } from "./DrawerLinks";

export function getIconImage(
  fileName: string,
  height = 30,
  fileExtension = "svg"
) {
  return (
    <Image
      src={`/img/icons/${fileName}.${fileExtension}`}
      alt={fileName}
      height={height}
      width={30}
    />
  );
}

export default function AppDrawer() {
  return (
    <Grid
      container
      className="border-r-0"
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <DrawerHeader />
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item justifyContent={"center"}>
        <DrawerLinks />
      </Grid>
    </Grid>
  );
}
