import { ReactElement } from "react";

/**
 * Props for the `When` component.
 *
 * @property value - The condition to evaluate.
 * @property then - Content to render if the condition is true.
 * @property otherwise - Optional content to render if the condition is false.
 *                        Defaults to null if not provided.
 */
export type WhenProps = {
  value: boolean;
  then: ReactElement | string | number;
  otherwise?: ReactElement | string | number | null;
};
