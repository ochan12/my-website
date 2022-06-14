import { CircularProgress, Grid } from "@mui/material";
import Layout from "components/layout/Layout";
import { HeaderStep } from "components/steps/HeaderStep";
import { JobStep } from "components/steps/JobStep";
import { StepType } from "interfaces";
import { useStepsByType } from "lib/api";
import Head from "next/head";
import { useState } from "react";
import SwiperBase from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Jobs() {
  const { steps, isLoading, isError } = useStepsByType(StepType.JOB);
  const [activeJobIndex, setActiveJob] = useState(2);
  const [swiper, setSwiper] = useState<SwiperBase | null>(null);

  const slideTo = (index: number) => swiper?.slideTo(index);
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
          <Grid container item xs={12} className="p-2">
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              className="p-2"
              spacing={2}
            >
              {steps?.map((step, index) => (
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
            <Grid container item xs={12} spacing={2} className="mt-4" justifyContent="center">
              <Swiper
                spaceBetween={10}
                initialSlide={activeJobIndex}
                navigation={true}
                onSwiper={setSwiper}
              >
                {steps?.map((step, index) => (
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
