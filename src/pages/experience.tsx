import {
    CircularProgress
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
      {isLoading ? (
        <CircularProgress />
      ) : (
        steps?.map((step) => <JobStep step={step} />)
      )}
    </Layout>
  );
}
