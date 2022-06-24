import { render, screen } from "@testing-library/react";
import { Resource } from "interfaces";
import { useBackendSkills } from "lib/hooks";
import SkillCard, { SkillItem } from "../SkillCard";
import { resources } from "./fixtures";

describe("SkillCard", () => {
  it("SkillItem", () => {
    render(<SkillItem name="Coding" experience={50} />);
    const skillItem = screen.findAllByText("Coding");
    expect(skillItem).toBeTruthy();
  });
  it("SkillCard", () => {
    const skills = useBackendSkills();

    const reducedResources =
      resources?.reduce<{ [k: string]: Resource }>((resource, currentValue) => {
        resource[currentValue._id] = currentValue;
        return resource;
      }, {}) ?? {};
    render(
      <SkillCard
        skills={skills}
        title="Test skills"
        resourcesMap={reducedResources}
      />
    );
    const skillCardList = screen.getAllByRole("skill-list-item")
    expect(skillCardList.length).toBe(4)
  });
});
