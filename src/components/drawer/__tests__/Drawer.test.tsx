import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DrawerHeader } from "../DrawerHeader";
import { DrawerLinks } from "../DrawerLinks";

describe("Drawer", () => {
  it("DrawerHeader", () => {
    render(<DrawerHeader />);
    const headerName = screen.getByRole("HeaderName");
    expect(headerName.textContent).toContain("< M />");
  });
  it("DrawerLinks items", () => {
    render(<DrawerLinks />);
    const listItems = screen.getAllByRole("listitem");
    const list = screen.getAllByRole("list");
    expect(listItems.length).toBe(5);
    expect(list.length).toBe(1);
  });
});
