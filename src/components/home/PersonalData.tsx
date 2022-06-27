import React, { ReactNode, useContext, useMemo } from "react";
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
  return loading ? (
    <Skeleton variant="text" className="text-center" />
  ) : (
    <>{content}</>
  );
}

export function PersonalData() {
  const { person, isLoading } = usePersonInformation();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const loading = useMemo(
    () => !!!person || isLoading,
    [person, isLoading]
  );
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent="center"
      sx={{
        color: theme.palette.primary[colorMode.theme],
      }}
      className="font-mono text-center align-middle"
    >
      <Grid item xs={12} className="text-center">
        <LoadingText
          loading={loading}
          content={`Full name: ${person?.name} ${person?.surname}`}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingText
          loading={loading}
          content={` Age: ${differenceInyears(
            new Date(),
            person?.birthDate!
          )} years old`}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingText
          loading={loading}
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
          loading={loading}
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
