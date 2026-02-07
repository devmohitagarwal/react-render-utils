import React, { ReactElement, ReactNode } from "react";
import { RangeProps } from "./Types";

/**
 * @category Component
 *
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
 * @example
 * // Open-ended ranges
 * <Range
 *   value={itemCount}
 *   ranges={{
 *     "0-0": <Empty />,
 *     "1-9": <FewItems />,
 *     "10+": <ManyItems />,
 *   }}
 * />
 *
 * @param props - {@link RangeProps}
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
 * @since 1.0.0
 */
export default function Range({
  value,
  ranges,
}: RangeProps): ReactElement | null {
  // Check each range for a match
  for (const [rangeString, content] of Object.entries(ranges)) {
    if (rangeString === "Default") continue;

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
 * Supports negative numbers (e.g., "-10-5" for -10 to 5)
 * and open-ended ranges (e.g., "100+" for 100 to infinity).
 * Returns null for invalid range strings.
 */
function parseRange(rangeString: string): [number, number] | null {
  try {
    // Try open-ended range first (e.g., "100+", "-5+")
    const openMatch = rangeString.match(/^(-?\d+)\+$/);
    if (openMatch) {
      const start = Number(openMatch[1]);
      if (isNaN(start)) return null;
      return [start, Infinity];
    }

    // Match an optional negative number, then a dash separator, then another optional negative number
    const match = rangeString.match(/^(-?\d+)-(-?\d+)$/);
    if (!match) return null;

    const start = Number(match[1]);
    const end = Number(match[2]);
    if (isNaN(start) || isNaN(end)) return null;
    if (end < start) return null;
    return [start, end];
  } catch {
    return null;
  }
}
