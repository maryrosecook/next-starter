import { AmOrPm } from "./clock";

export function getClockData(date: Date) {
  const hours24 = date.getHours();
  const hours12 = hours24 % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amOrPm = hours24 < 12 ? AmOrPm.AM : AmOrPm.PM;

  return {
    hours: hours12,
    minutes,
    seconds,
    amOrPm,
  };
}
