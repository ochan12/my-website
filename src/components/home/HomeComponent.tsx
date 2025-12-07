import React from "react";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import { useHomeLinks } from "lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Profiles } from "./Profiles";
import { PersonalData } from "./PersonalData";

function LinkItemComponent({ link, text }: { link: string; text: string }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Button
      variant="text"
      sx={{ color: theme.palette.primary[colorMode.theme] }}
    >
      <Link href={link}>{text}</Link>
    </Button>
  );
}

function Introduction() {
  const theme = useTheme();
  const homeLinks = useHomeLinks();
  return (
    <Grid container justifyContent={"center"}>
      <Grid size={{ xs: 12 }}>
        <Typography
          variant="body1"
          className="text-lg text-opacity-50 max-w-lg text-center margin-auto"
        >
          Hello there!{" "}
          <Image
            src={`/img/icons/${
              theme.palette.mode === "light" ? "obi_wan.svg" : "emperor.svg"
            }`}
            className="inline-block align-middle"
            alt="Hello there..."
            title="Hello there..."
            width={20}
            height={20}
          />
          {"  "}
          I&apos;m Mateo and for some misterious reason (or maybe not) you ended
          up in my website. You might want to check out:
        </Typography>
      </Grid>
      <Grid>
        <Grid container justifyContent={"center"}>
          {homeLinks.map((item, index) => (
            <Grid key={index}>{LinkItemComponent(item)}</Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

function Presentation() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid size={{ xs: 12 }}>
        <Typography
          variant="body1"
          className="text-lg text-opacity-50 max-w-lg text-center margin-auto"
        >
          I&apos;m a Full-Stack developer with a crush on Backend with
          experience in different fields and technologies. From time to time I
          also create some mobile apps just for fun.
        </Typography>
      </Grid>
      <Grid>
        <Profiles />
      </Grid>
    </Grid>
  );
}

export default function HomeComponent() {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignContent="center"
      spacing={4}
    >
      <Grid size={{ xs: 12 }} className="text-center">
        <Grid container justifyContent={"center"}>
          <Grid size={{ xs: 12 }} className="text-center">
            <PersonalData />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} className="text-center">
        <Introduction />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }} className="text-center">
        <Presentation />
      </Grid>
    </Grid>
  );
}
