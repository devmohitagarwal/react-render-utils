import React, { ReactElement } from "react";
import { RangeProps } from "./Types";

/**
 * A declarative range-based conditional rendering component for React.
 * Renders content based on where a numeric value falls within defined ranges.
 * 
 * @example
 * // Grade scoring system
 * <Range
 *   value={studentScore}
 *   ranges={{
 *     "0-50": <div>Grade: F - Needs improvement</div>,
 *     "51-70": <div>Grade: C - Satisfactory</div>,
 *     "71-85": <div>Grade: B - Good</div>,
 *     "86-100": <div>Grade: A - Excellent</div>,
 *     Default: <div>Invalid score</div>
 *   }}
 * />
 * 
 * @example
 * // HTTP status codes
 * <Range
 *   value={statusCode}
 *   ranges={{
 *     "200-299": <SuccessMessage />,
 *     "400-499": <ClientErrorMessage />,
 *     "500-599": <ServerErrorMessage />,
 *     Default: <UnknownStatus />
 *   }}
 * />
 * 
 * @param props - Component props
 * @param props.value - The numeric value to test against ranges
 * @param props.ranges - An object mapping range strings to React elements.
 *                      Ranges should be in the format "start-end" (e.g., "0-100").
 *                      Special 'Default' key serves as fallback when no range matches.
 * 
 * @returns The content corresponding to the matching range, Default case content,
 *          or null if no match and no Default provided
 * 
 * @remarks
 * - Ranges are inclusive of their start and end values
 * - Ranges are checked in object entry order (might not be deterministic)
 * - First matching range is used if ranges overlap
 * - Invalid range strings are silently skipped
 * - Performance is O(n) where n is the number of ranges
 * 
 * @since 1.0.0
 */
export default function Range({
  value,
  ranges,
}: RangeProps): ReactElement | null {

  // Check each range for a match
  for (const [rangeString, content] of Object.entries(ranges)) {
    if (rangeString === 'Default') continue;

    const range = parseRange(rangeString);
    if (!range) continue;

    const [start, end] = range;
    if (value >= start && value <= end) {
      return <>{content}</>;
    }
  }

  // Return Default case or null if no match
  return ranges.Default ? <>{ranges.Default}</> : null;
}

/**
 * Parses a range string into a tuple of numbers.
 * Returns null for invalid range strings.
 */
function parseRange(rangeString: string): [number, number] | null {
  try {
    const [start, end] = rangeString.split('-').map(Number);
    if (isNaN(start) || isNaN(end)) return null;
    if (end < start) return null;
    return [start, end];
  } catch {
    return null;
  }
}