import { LifeStep, Resource, StepType } from "interfaces";
import useSWR, { Fetcher, Key } from "swr";

const headers: HeadersInit = {
  Authorization: `Basic ${btoa(
    `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
  )}`,
};

export const lifeStepFetcher: Fetcher<LifeStep[], string> = (...args) => {
  return fetch(...args, {
    headers,
  }).then((res) => res.json());
};

export const resourceFetcher: Fetcher<Resource[], string> = (...args) => {
  return fetch(...args, {
    headers,
  }).then((res) => res.json());
};

const getUrlFromStepType = (stepType: StepType) => {
  switch (stepType) {
    case StepType.JOB:
      return "jobs";
    case StepType.HOBBY:
      return "hobbies";
    case StepType.TRAVEL:
      return "trips";
    case StepType.EDUCATION:
      return "education";
  }
};

const apiRoot = "http://localhost:8080";
export function useStepsByType(stepType: StepType) {
  const uid: Key = `${apiRoot}/life/${getUrlFromStepType(stepType)}`;
  const { data, error } = useSWR(uid, lifeStepFetcher);

  return {
    steps: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useResources(resources: string[]) {
  const uid: Key = `${apiRoot}/resources?ids=${resources.join(",")}`;
  const { data, error } = useSWR(uid, resourceFetcher);

  return {
    resources: data,
    isLoading: !error && !data,
    isError: error,
  };
}
