export enum AmOrPm {
  AM = "am",
  PM = "pm",
}

function toPaddedSingleDigitNumber(number: number) {
  return number.toString().padStart(2, "0");
}

export function Clock({
  hours,
  minutes,
  seconds,
  amOrPm,
}: {
  hours: number;
  minutes: number;
  seconds: number;
  amOrPm: AmOrPm;
}) {
  return (
    <div className="flex p-1 text-3xl">
      <div data-testid="hours">{toPaddedSingleDigitNumber(hours)}</div>
      <div>:</div>
      <div data-testid="minutes">{toPaddedSingleDigitNumber(minutes)}</div>
      <div>:</div>
      <div data-testid="seconds">{toPaddedSingleDigitNumber(seconds)}</div>
      <div data-testid="amOrPm" className="pl-1">
        {amOrPm}
      </div>
    </div>
  );
}
