import React, { ReactNode, useContext } from "react";
import { Grid, Skeleton, useTheme } from "@mui/material";
import { usePersonInformation } from "lib/api";
import differenceInyears from "date-fns/differenceInYears";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Image from "next/image";

function LoadingText({
  content,
  loading,
}: {
  content: string | ReactNode;
  loading: boolean;
}) {
  return loading ? <Skeleton variant="text" width={100} /> : <>{content}</>;
}

export function PersonalData() {
  const { person, isLoading } = usePersonInformation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        color: theme.palette.primary[colorMode.theme],
      }}
      className="font-mono text-center align-middle"
    >
      <Grid item xs={12}>
        <LoadingText
          loading={isLoading || !person}
          content={`Full name: ${person?.name} ${person?.surname}`}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingText
          loading={isLoading || !person}
          content={` Age: ${differenceInyears(
            new Date(),
            person?.birthDate!
          )} years old`}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingText
          loading={isLoading || !person}
          content={
            <>
              Birthplace: Córdoba,{" "}
              <Image
                alt="Argentina"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg"
                width={30}
                height={20}
              />
            </>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingText
          loading={isLoading || !person}
          content={
            <>
              Now: Stockholm,{" "}
              <Image
                alt="Sweden"
                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg"
                width={30}
                height={20}
              />
            </>
          }
        />
      </Grid>
    </Grid>
  );
}
