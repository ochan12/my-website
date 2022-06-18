import { Grid, Paper, Typography } from "@mui/material";
import Layout from "components/layout/Layout";
import Image from "next/image";
import { ReactNode } from "react";

export function HobbyCard({
  title,
  subtitle,
  imageUrl,
  alt,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
}) {
  return (
    <Paper className="p-2 border" elevation={0}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Image
        src={imageUrl}
        alt={alt}
        objectFit="contain"
        layout="intrinsic"
        width={300}
        height={300}
      />
    </Paper>
  );
}

export default function Hobbies() {
  return (
    <Layout>
      <Grid
        container
        alignItems={"center"}
        height="100vh"
        spacing={2}
        justifyContent="center"
      >
        <Grid item>
          <HobbyCard
            title="Running"
            subtitle="Well, not as fast as BB-8"
            imageUrl="/img/hobbies/running.gif"
            alt="BB-8 running"
          />
        </Grid>
        <Grid item>
          <HobbyCard
            title="Reading"
            subtitle="To learn, you must"
            imageUrl="/img/hobbies/reading_2.jpeg"
            alt="Grogu on the letters"
          />
        </Grid>
        <Grid item>
          <HobbyCard
            title="Movies"
            subtitle="This ideas had to come from somewhere"
            imageUrl="/img/hobbies/movies.gif"
            alt="This ideas had to come from somewhere"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
