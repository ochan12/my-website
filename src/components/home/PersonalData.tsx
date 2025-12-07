import React, { ReactNode, useContext, useMemo } from "react";
import { Grid, Skeleton, useTheme } from "@mui/material";
import { usePersonInformation } from "lib/api";
import { differenceInYears } from "date-fns/differenceInYears";
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
  const loading = useMemo(() => !!!person || isLoading, [person, isLoading]);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        color: theme.palette.primary[colorMode.theme],
      }}
      className="text-center"
    >
      <Grid size={{ xs: 12, md: 6 }} className="flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/img/mateo_barcelona.jpeg"
            className="object-cover"
            height={200}
            width={200}
            alt={"Mateo"}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} className="text-center space-y-2">
        <div>
          <LoadingText
            loading={loading}
            content={`Full name: ${person?.name} ${person?.surname}`}
          />
        </div>
        <div>
          <LoadingText
            loading={loading}
            content={`Age: ${differenceInYears(
              new Date(),
              person?.birthDate!,
            )} years old`}
          />
        </div>
        <div>
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
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </>
            }
          />
        </div>
        <div>
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
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </>
            }
          />
        </div>
      </Grid>
    </Grid>
  );
}
