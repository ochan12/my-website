import {
  Avatar,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import Layout from "components/layout/Layout";
import { JobStep } from "components/steps/JobStep";
import { StepType } from "interfaces";
import { useStepsByType } from "lib/api";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

export default function Jobs() {
  const { steps, isLoading, isError } = useStepsByType(StepType.JOB);
  const [activeJob, setActiveJob] = useState(2)
  return (
    <Layout>
      <Head>
        <title>Jobs</title>
      </Head>
        <Grid
          container
          justifyContent={"center"}
          xs={12}
          spacing={2}
          className="whitespace-nowrap mt-4"
        >
          {isLoading ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Grid container spacing={2} xs={12} justifyContent="center">
                <Grid item xs={10}>
                  <Stepper alternativeLabel activeStep={activeJob}>
                    {steps?.map((step) => (
                      <Step key={step.name}>
                        <StepLabel>{step.name}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>

                <Grid item xs={12}>
                  <Swiper spaceBetween={10} initialSlide={activeJob} onSlideChangeTransitionEnd={(swiper) =>{
                    setActiveJob(swiper.activeIndex)
                  }}>
                    {steps?.map((step) => (
                      <SwiperSlide>
                        <JobStep step={step} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
    </Layout>
  );
}
