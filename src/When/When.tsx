import React, { ReactNode } from "react";

/**
 * Props for the enhanced When component that accepts both ReactNode and functions
 */
interface WhenProps<T> {
  /**
   * The value to check for truthiness
   */
  value: T;

  /**
   * Content to render when value is truthy.
   * Can be either a ReactNode or a function that receives the non-nullable value.
   */
  then: ReactNode | ((value: NonNullable<T>) => ReactNode);

  /**
   * Content to render when value is falsy.
   * Can be either a ReactNode or a function that receives undefined.
   */
  otherwise?: ReactNode | ((value: undefined) => ReactNode);
}

/**
 * An enhanced When component that conditionally renders content based on the truthiness of a value.
 * Supports both direct ReactNode and function rendering patterns for type safety.
 *
 * @template T - The type of the value being checked
 * @param {WhenProps<T>} props - Component props
 * @returns {JSX.Element} Either the then element or the otherwise element
 */
export default function When<T>(props: WhenProps<T>): JSX.Element {
  const { value, then, otherwise } = props;

  // Handle the case when value is truthy
  if (value) {
    // Check if 'then' is a function
    if (typeof then === "function") {
      // Call the function with the non-nullable value
      return <>{then(value as NonNullable<T>)}</>;
    }
    // Otherwise, return the ReactNode directly
    return <>{then}</>;
  }

  // Handle the case when value is falsy
  // Check if 'otherwise' is a function
  if (typeof otherwise === "function") {
    // Call the function with undefined
    return <>{otherwise(undefined)}</>;
  }
  // Otherwise, return the ReactNode directly
  return <>{otherwise}</>;
}

// Example usage with TypeScript
interface User {
  email: string;
  name: string;
}
