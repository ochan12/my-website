import { Contact, LifeStep, Person, Resource, StepType } from "interfaces";
import useSWR, { Fetcher, Key } from "swr";
import { getConfigEnv } from "./config";

const headers = new Headers({
  Authorization: `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
  ).toString("base64")}`,
  "Access-Control-Allow-Origin": "*",
});

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
export const contactFetcher: Fetcher<Contact, string> = (...args) => {
  return fetch(...args, {
    headers,
  }).then((res) => res.json());
};

export const personFetcher: Fetcher<Person, string> = (...args) => {
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

export function useStepsByType(stepType: StepType) {
  const uid: Key = `${getConfigEnv().apiUrl}life/${getUrlFromStepType(
    stepType
  )}`;
  const { data, error } = useSWR(uid, lifeStepFetcher);

  return {
    steps: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useResources(resources: string[]) {
  const uid: Key = `${getConfigEnv().apiUrl}resources?ids=${resources.join(
    ","
  )}`;
  const { data, error } = useSWR(uid, resourceFetcher);

  return {
    resources: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useContactInformation() {
  const uid: Key = `${getConfigEnv().apiUrl}contact`;
  const { data, error } = useSWR(uid, contactFetcher);
  return {
    contact: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function usePersonInformation() {
  const uid: Key = `${getConfigEnv().apiUrl}person`;
  const { data, error } = useSWR(uid, personFetcher);
  return {
    person: data,
    isLoading: !error && !data,
    isError: error,
  };
}
