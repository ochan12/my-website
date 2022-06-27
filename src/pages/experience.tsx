import React from "react";
import {
  CircularProgress,
  Grid
} from "@mui/material";
import Layout from "components/layout/Layout";
import { HeaderStep } from "components/steps/HeaderStep";
import { JobStep } from "components/steps/JobStep";
import { ColorModeContext } from "components/theme/ThemeWrapper";
import { StepType } from "interfaces";
import { useStepsByType } from "lib/api";
import Head from "next/head";
import { useContext, useMemo, useState } from "react";
import SwiperBase from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Jobs() {
  const { steps, isLoading } = useStepsByType(StepType.JOB);
  const hobbySteps = useStepsByType(StepType.HOBBY);
  const [activeJobIndex, setActiveJob] = useState(2);
  const [swiper, setSwiper] = useState<SwiperBase | null>(null);
  const slideTo = (index: number) => swiper?.slideTo(index);
  const {theme} = useContext(ColorModeContext)
  const filteredHobbySteps = useMemo(
    () =>
      hobbySteps.steps
        .filter((step) => step.name === "Solo projects")
        .map((step) => ({
          ...step,
          photos: step.photos.map((photo) => {
            const [name, extension] = photo.split(".");
            return [`${name}_${theme}`, extension].join(".");
          }),
        })),
    [hobbySteps.steps, theme]
  );
  return (
    <Layout>
      <Head>
        <title>Jobs</title>
      </Head>
      <Grid
        container
        justifyContent={"center"}
        spacing={1}
        className="whitespace-nowrap"
      >
        {isLoading ? (
          <Grid item>
            <CircularProgress />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid container justifyContent="center" className="p-2" spacing={2}>
              {[...steps, ...filteredHobbySteps].map((step, index) => (
                <Grid item xs={2} key={index}>
                  <HeaderStep
                    step={step}
                    currentStepIndex={activeJobIndex}
                    isActiveIndex={index === activeJobIndex}
                    onClick={() => {
                      setActiveJob(index);
                      slideTo(index);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} className="mt-4 p-4" justifyContent="right">
              <Swiper
                spaceBetween={10}
                initialSlide={activeJobIndex}
                navigation={{
                  enabled: false,
                  nextEl: "",
                  prevEl: "",
                }}
                onSwiper={setSwiper}
              >
                {[...steps, ...filteredHobbySteps]?.map((step, index) => (
                  <SwiperSlide key={index}>
                    <JobStep step={step} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}
