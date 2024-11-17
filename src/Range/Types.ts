import { ReactNode } from "react";

/**
 * Represents a string in the format "number-number" or "Default"
 * @example "0-100"
 * @example "Default"
 */
export type RangeValue = `${number}-${number}` | "Default";

/**
 * Represents valid renderable React content, excluding undefined and boolean values
 * @internal
 */
export type DefinedReactNode = Exclude<ReactNode, undefined | boolean>;

/**
 * Configuration object mapping range strings to their corresponding content
 * @remarks
 * Each key should be either a range string (e.g., "0-100") or "Default"
 */
export type Range = Partial<Record<RangeValue, DefinedReactNode>>;

/**
 * Props for the `Range` component

 */
export interface RangeProps {
  /**
   * The numerical value to test against the defined ranges
   * @remarks
   * Should be a finite number within your expected range boundaries
   */
  value: number;

  /**
   * Object mapping range strings to content to render
   * @remarks
   * Each key should be in the format "start-end" or "Default"
   * @example
   * ```tsx
   * {
   *   "0-50": <FailGrade />,
   *   "51-100": <PassGrade />,
   *   "Default": <InvalidGrade />
   * }
   * ```
   */
  ranges: Range;
}