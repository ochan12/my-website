import CasesOutlined from "@mui/icons-material/CasesOutlined";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from "@mui/material";
import { JobStep } from "components/steps/JobStep";
import { StepType } from "interfaces";
import { useStepsByType } from "lib/api";
import Head from "next/head";

export default function Jobs() {
  const { steps, isLoading, isError } = useStepsByType(StepType.JOB);
  console.log({ steps, isLoading, isError });
  if (isLoading)
    return (
      <button>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      </button>
    );
  return (
    <div>
      <Head>
        <title>Jobs</title>
      </Head>
      {isLoading ? (
        <CircularProgress />
      ) : (
        steps?.map((step) => <JobStep step={step} />)
      )}
    </div>
  );
}
