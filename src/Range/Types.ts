import { ReactNode } from "react";

/**
 * Represents a range in the format "start-end" (e.g., "0-100")
 * or the special "Default" case
 */
export type RangeValue = `${number}-${number}` | "Default";

/**
 * Excludes undefined and boolean from ReactNode since they're not valid render values
 */
export type DefinedReactNode = Exclude<ReactNode, undefined | boolean>;

/**
 * Maps range strings to their corresponding content
 */
export type Range = Partial<Record<RangeValue, DefinedReactNode>>;

/**
 * Props for the Range component
 */
export interface RangeProps {
  /** The numerical value to test against the defined ranges */
  value: number;
  /** Object mapping range strings to content to render */
  ranges: Range;
}