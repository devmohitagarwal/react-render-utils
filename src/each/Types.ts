import { ReactNode } from "react";

/**
 * Props for the `Each` component
 *
 * @typeParam T - The type of items in the array
 */
export interface EachProps<T> {
  /**
   * The array of items to iterate over.
   * Handles null and undefined gracefully.
   */
  of: T[] | null | undefined;

  /**
   * Render function called for each item in the array.
   * @param item - The current item
   * @param index - The current index
   * @returns ReactNode to render for this item
   */
  render: (item: T, index: number) => ReactNode;

  /**
   * Content to render when the array is empty, null, or undefined.
   * Returns null if omitted.
   */
  empty?: ReactNode;
}
