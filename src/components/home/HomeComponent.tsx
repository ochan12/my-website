import React from "react";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import { useHomeLinks } from "lib/hooks";
import Image from "next/image";
import Link from "next/link";

function LinkItemComponent({ link, text }: { link: string; text: string }) {
  return (
    <Button variant="text">
      <Link href={link}> {text}</Link>
    </Button>
  );
}

export default function HomeComponent() {
  const theme = useTheme();
  const homeLinks = useHomeLinks();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignContent="center"
      spacing={4}
      className="h-screen"
    >
      <Grid item xs={12} className="text-center">
        <Image
          priority
          src="/img/mateo_barcelona.jpeg"
          className={"rounded-full"}
          height={200}
          width={200}
          alt={"Mateo"}
          objectFit={"cover"}
        />
      </Grid>
      <Grid item xs={12} className="text-center">
        <Typography
          variant="body1"
          className="text-lg text-opacity-50 max-w-lg text-center margin-auto"
        >
          Hello there!{" "}
          <Image
            src={`/img/icons/${
              theme.palette.mode === "light" ? "obi_wan.svg" : "emperor.svg"
            }`}
            alt="Hello there..."
            title="Hello there..."
            width={20}
            height={20}
          />{" "}
          I&apos;m Mateo and for some misterious reason (or maybe not) you ended
          up in my website. You might want to check out:
        </Typography>
      </Grid>
      <Grid item xs={12} className="text-center">
        <Grid container>
          {homeLinks.map((item, index) => (
            <Grid item key={index}>
              {LinkItemComponent(item)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
