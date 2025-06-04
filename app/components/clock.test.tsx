import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Clock } from "./clock";
import { AmOrPm } from "../lib/getClockData";

test("renders hours, minutes and am/pm", async () => {
  render(<Clock hours={11} minutes={12} seconds={13} amOrPm={AmOrPm.AM} />);

  const hours = within(screen.getByTestId("hours"));
  expect(hours.getByText("11")).toBeDefined();

  const minutes = within(screen.getByTestId("minutes"));
  expect(minutes.getByText("12")).toBeDefined();

  const seconds = within(screen.getByTestId("seconds"));
  expect(seconds.getByText("13")).toBeDefined();

  const amOrPm = within(screen.getByTestId("amOrPm"));
  expect(amOrPm.getByText("am")).toBeDefined();
});
