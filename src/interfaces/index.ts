export enum StepType {
  "JOB" = "JOB",
  "HOBBY" = "HOBBY",
  "EDUCATION" = "EDUCATION",
  "TRAVEL" = "TRAVEL",
}

interface GeoPosition {
  lat: number;
  lon: number;
}

interface Place {
  name: string;
  position: GeoPosition;
  countryCode: String;
}

export interface Resource {
  name: string;
  logo: string;
  url: string;
  _id: string
}

export interface Project {
  name: string;
  description: string;
  resources: string[];
  startTime: number;
  endTime: number;
  company: string;
  url: string;
  userId: string;
}

export interface LifeStep {
  name: string;
  type: StepType;
  description: string;
  photos: string[];
  initialTime: number;
  endTime: number;
  place: Place;
  projects: Project[];
  userId: string;
}

export interface Skill {
  name: string;
  experience: number;
}
