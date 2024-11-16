import React, { ReactElement } from "react";
import { ReactNode } from "react";
import { JSPrimitive } from "Switch/Types";

type RangeValue = `${number}-${number}` | "Default";

type DefinedReactNode = Exclude<ReactNode, undefined | boolean>;

type Range = Partial<Record<RangeValue, JSPrimitive | DefinedReactNode>>;

type RangeProps = {
  value: number;
  ranges: Range;
};

export default function Range({
  value,
  ranges,
}: RangeProps): ReactElement | null {
  for (const [key, rangeValue] of Object.entries(ranges)) {
    const rangeValues = getRange(key);
    const isInsideRange = rangeValues[0] < value && value < rangeValues[1];
    if (isInsideRange) return <>{rangeValue}</>;
  }
  if (ranges.Default) return <>{ranges.Default}</>;

  return null;
}

function getRange(rangeString: string): number[] {
  return rangeString.split("-").map((val) => parseInt(val));
}
