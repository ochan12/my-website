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

export default function Jobs() {
  const { steps, isLoading, isError } = useStepsByType(StepType.JOB);
  return (
    <Layout>
      <Head>
        <title>Jobs</title>
      </Head>
      <div className="mt-4">
        <Grid
          container
          justifyContent={"center"}
          spacing={2}
          alignItems="center"
          className="whitespace-nowrap"
        >
          {isLoading ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            <Stepper alternativeLabel>
              {steps?.map((step) => (
                <Step key={step.name}>
                  <StepLabel>{step.name}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
          <Grid
            item
            xs={12}
            container
            justifyContent={"center"}
            spacing={2}
            alignItems="center"
            className="whitespace-nowrap"
          >
            {steps?.map((step) => (
              <Grid item xs={3}>
                <JobStep step={step} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
