import { Paper, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { useContext } from "react";
import {
  ColorModeContext,
  DARK_PRIMARY_COLOR,
  LIGHT_PRIMARY_COLOR,
} from "components/theme/ThemeWrapper";
import style from "./HobbyCard.module.scss";

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
