import { useEffect, useState } from "react";
import { Clock } from "./clock";
import { getClockData } from "../lib/getClockData";

export function LocalClock() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [clockData, setClockData] = useState(getClockData(new Date()));

  useEffect(() => {
    if (intervalId) {
      return;
    }

    setIntervalId(
      setInterval(() => {
        setClockData(getClockData(new Date()));
      }, 1000)
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Clock
      hours={clockData.hours}
      minutes={clockData.minutes}
      seconds={clockData.seconds}
      amOrPm={clockData.amOrPm}
    />
  );
}
