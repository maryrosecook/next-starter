import { describe, expect, test, vi } from "vitest";
import { getClockData } from "./getClockData";
import { beforeEach } from "node:test";

describe("getClockData", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test("keeps morning hours for hours in the morning", async () => {
    vi.setSystemTime(new Date(2000, 2, 1, 11, 12, 13));
    expect(getClockData(new Date()).hours).toEqual(11);
  });

  test("sets am for morning hours", async () => {
    vi.setSystemTime(new Date(2000, 2, 1, 11, 12, 13));
    expect(getClockData(new Date()).amOrPm).toEqual("am");
  });

  test("sets hours for 12 hour clock", async () => {
    vi.setSystemTime(new Date(2000, 2, 1, 13, 12, 13));
    expect(getClockData(new Date()).hours).toEqual(1);
  });

  test("sets pm hours for afternoon time", async () => {
    vi.setSystemTime(new Date(2000, 2, 1, 13, 12, 13));
    expect(getClockData(new Date()).amOrPm).toEqual("pm");
  });
});
