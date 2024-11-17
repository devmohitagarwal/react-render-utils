import { ReactElement } from "react";
import { WhenProps } from "./Types";
import React from "react";

/**
 * A declarative conditional rendering component for JSX/TSX.
 * Provides a more readable alternative to ternary operators in JSX.
 * 
 * @example
 * // Simple usage
 * <When 
 *   value={isLoading} 
 *   then={<LoadingSpinner />} 
 *   otherwise={<Content />} 
 * />
 * 
 * @example
 * // Without otherwise prop
 * <When 
 *   value={hasError} 
 *   then={<ErrorMessage error={error} />} 
 * />
 * 
 * @param props - Component props
 * @param props.value - The condition to evaluate
 * @param props.then - Content to render when condition is true
 * @param props.otherwise - Optional content to render when condition is false
 *                         If omitted, renders null
 * 
 * @returns ReactElement that renders either:
 *          - The 'then' content if value is true
 *          - The 'otherwise' content if value is false and otherwise is provided
 *          - null if value is false and otherwise is not provided
 * 
 * @since 1.0.0
 */
export default function When({
  value,
  then,
  otherwise = null,
}: WhenProps): ReactElement {
  return <>{value ? then : otherwise}</>;
}