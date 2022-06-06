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
