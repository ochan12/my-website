import { Contact, LifeStep, Person, Resource, StepType } from "interfaces";
import useSWR, { Fetcher, Key } from "swr";

export const lifeStepFetcher: Fetcher<LifeStep[], string> = async (...args) => {
  return fetch(...args).then((res) => res.json());
};

export const resourceFetcher: Fetcher<Resource[], string> = async (...args) => {
  return fetch(...args).then((res) => res.json());
};
export const contactFetcher: Fetcher<Contact, string> = async (...args) => {
  return fetch(...args).then((res) => res.json());
};

export const personFetcher: Fetcher<Person, string> = async (...args) => {
  return fetch(...args).then((res) => res.json());
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
  const uid: Key = `/api/steps?step=${getUrlFromStepType(stepType)}`;
  const { data, error } = useSWR(uid, lifeStepFetcher);

  return {
    steps: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useResources(resources: string[]) {
  if (!resources || resources.length === 0)
    return { resources: [], isLoading: false, isError: false };
  const uid: Key = `/api/resources?ids=${resources.join(",")}`;
  const { data, error } = useSWR(uid, resourceFetcher);

  return {
    resources: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useContactInformation() {
  const uid: Key = `/api/contact`;
  const { data, error } = useSWR(uid, contactFetcher);
  return {
    contact: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function usePersonInformation() {
  const uid: Key = `/api/person`;
  const { data, error } = useSWR(uid, personFetcher);
  return {
    person: data,
    isLoading: !error && !data,
    isError: error,
  };
}
