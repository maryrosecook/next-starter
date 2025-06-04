import { expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Hello } from "./Hello";

it("renders hello", async () => {
  render(<Hello />);

  const hours = within(screen.getByTestId("hello"));
  expect(hours.getByText("Hello")).toBeDefined();
});
