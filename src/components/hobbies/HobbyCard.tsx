import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Image from "next/image";
import { useContext, useState } from "react";
import { Swiper as SwiperBase } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

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
    <Paper className="p-10 text-center" elevation={0} role="hobby-card">
      <Grid container className="h-full" justifyContent={"space-evenly"}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" role="title" className="text-center">
            {title}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <div className="flex justify-center">
            <Image
              src={imageUrl}
              alt={alt}
              objectFit="contain"
              layout="intrinsic"
              width={300}
              height={300}
            />
          </div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="subtitle1"
            role="subtitle"
            className="text-center"
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export function HobbySwiperCard({
  title,
  subtitle,
  imagesUrl,
  alt,
}: {
  title: string;
  subtitle: string;
  imagesUrl: string[];
  alt: string;
}) {
  const colorMode = useContext(ColorModeContext);
  const [swiper, setSwiper] = useState<SwiperBase | null>(null);
  return (
    <Paper className="p-2 text-center" elevation={0}>
      <Grid container className="h-full" justifyContent={"space-evenly"}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" className="text-center">
            {title}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Swiper
            navigation={{
              enabled: true,
            }}
            modules={[Navigation]}
            loop={true}
            className={
              colorMode.theme === "dark"
                ? "[&_.swiper-button-next]:text-star-wars-dark [&_.swiper-button-prev]:text-star-wars-dark"
                : "[&_.swiper-button-next]:text-star-wars-light [&_.swiper-button-prev]:text-star-wars-light"
            }
            onSwiper={setSwiper}
            style={{ width: "500px" }}
          >
            {imagesUrl.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-full justify-items-center">
                  <Image
                    src={url}
                    alt={alt}
                    objectFit="contain"
                    layout="intrinsic"
                    width={300}
                    height={300}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle1" className="text-center">
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
