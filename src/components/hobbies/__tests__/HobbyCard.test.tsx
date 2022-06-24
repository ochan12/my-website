import { render, screen } from "@testing-library/react";
import { HobbyCard } from "../HobbyCard";

describe("HobbyCard", () => {
  it("HobbyCard", () => {
    render(
      <HobbyCard
        title="Awesome hobby"
        subtitle="It's a great one"
        alt="awesome hobby"
        imageUrl="/img/hobbies/reading.png"
      />
    );
    const renderedHobbyCard = screen.getByRole("hobby-card");
    const renderedTitle= screen.getByRole("title");
    const renderedSubTitle= screen.getByRole("subtitle");
    expect(renderedTitle.textContent).toBe("Awesome hobby");
    expect(renderedSubTitle.textContent).toBe("It's a great one");
  });
});
