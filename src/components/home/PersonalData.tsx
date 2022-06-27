import React, { useContext } from "react";
import { Grid, Skeleton, useTheme } from "@mui/material";
import { usePersonInformation } from "lib/api";
import differenceInyears from "date-fns/differenceInYears";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Image from "next/image";

export function PersonalData() {
  const { person, isLoading } = usePersonInformation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  if (isLoading) return <Skeleton variant="rectangular" />;
  return person ? (
    <Grid
      container
      alignItems={"center"}
      sx={{
        color: theme.palette.primary[colorMode.theme],
      }}
      className="font-mono text-center align-middle"
    >
      <Grid item xs={12}>
        Full name: {person?.name} {person?.surname}
      </Grid>
      <Grid item xs={12}>
        Age: {differenceInyears(new Date(), person?.birthDate)} years old
      </Grid>
      <Grid item xs={12}>
        Birthplace: Córdoba,{" "}
        <Image
          alt="Argentina"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg"
          width={30}
          height={20}
        />
      </Grid>
      <Grid item xs={12}>
        Now: Stockholm,{" "}
        <Image
          alt="Argentina"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg"
          width={30}
          height={20}
        />
      </Grid>
    </Grid>
  ) : (
    <></>
  );
}
