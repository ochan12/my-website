import React from "react";
import { Paper, Typography } from "@mui/material";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import Image from "next/image";
import { useContext, useState } from "react";
import { Swiper as SwiperBase, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./HobbyCard.module.scss";
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
    <Paper className="p-2 border" elevation={0} role="hobby-card">
      <Typography variant="h4" role="title">
        {title}
      </Typography>
      <Typography variant="subtitle1" role="subtitle">
        {subtitle}
      </Typography>
      <div className="text-center">
        <Image
          src={imageUrl}
          alt={alt}
          objectFit="contain"
          layout="intrinsic"
          width={300}
          height={300}
        />
      </div>
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
    <Paper className="p-2 border" elevation={0}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Swiper
        navigation={{
          enabled: true,
        }}
        modules={[Navigation]}
        className={style[`swiper-button${colorMode.theme}`]}
        onSwiper={setSwiper}
      >
        {imagesUrl.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
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
    </Paper>
  );
}
