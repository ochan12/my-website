import React from "react";
import { Grid } from "@mui/material";
import { HobbyCard, HobbySwiperCard } from "components/hobbies/HobbyCard";
import Layout from "components/layout/Layout";

export default function Hobbies() {
  return (
    <Layout>
      <Grid
        container
        alignItems={"center"}
        spacing={2}
        justifyContent="center"
        className="p-4"
      >
        <Grid item md={4} xs={12}>
          <HobbyCard
            title="Running"
            subtitle="Well, not as fast as BB-8"
            imageUrl="/img/hobbies/running.gif"
            alt="BB-8 running"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <HobbyCard
            title="Reading"
            subtitle="To learn, you must"
            imageUrl="/img/hobbies/reading_2.jpeg"
            alt="Grogu on the letters"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <HobbyCard
            title="Movies"
            subtitle="These ideas had to come from somewhere"
            imageUrl="/img/hobbies/movies.gif"
            alt="This ideas had to come from somewhere"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <HobbySwiperCard
            title="Mate"
            subtitle="Not a hobby, but I'll take it with me everywhere"
            imagesUrl={[
              "/img/mates/mate_in_snow.jpeg",
              "/img/mates/mate_in_italy.jpeg",
              "/img/mates/mate_in_sand.jpeg",
              "/img/mates/mate_in_cliff.jpeg",
            ]}
            alt="This ideas had to come from somewhere"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
