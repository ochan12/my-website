import { Skill } from "interfaces";

export function useBackendSkills(): Skill[] {
  return [
    { name: "node", experience: 90 },
    { name: "python", experience: 70 },
    { name: "java", experience: 60 },
    { name: "kotlin", experience: 40 },
  ];
}
export function useFrontendSkills(): Skill[] {
  return [
    { name: "typescript", experience: 90 },
    { name: "react", experience: 90 },
  ];
}
export function useDbSkills(): Skill[] {
  return [
    { name: "mongodb", experience: 90 },
    { name: "elastic", experience: 90 },
    { name: "postgresql", experience: 50 },
  ];
}
export function useOtherSkills(): Skill[] {
  return [
    { name: "redis", experience: 90 },
    { name: "redux", experience: 90 },
    { name: "traefik", experience: 80 },
    { name: "webpack", experience: 80 },
    { name: "nginx", experience: 50 },
  ];
}
export function useServicesSkills(): Skill[] {
  return [
    { name: "firebase", experience: 70 },
    { name: "aws", experience: 60 },
  ];
}
export function useHomeLinks(): { link: string; text: string }[] {
  return [
    { link: "/experience", text: "My experience" },
    { link: "/travel", text: "My trips" },
    { link: "/skills", text: "My skills" },
    { link: "/hobbies", text: "My hobbies" },
  ];
}
