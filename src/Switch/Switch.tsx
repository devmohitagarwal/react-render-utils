import { ReactElement } from "react";
import { JSPrimitive, SwitchProps } from "./Types";
import React from "react";

/**
 * A declarative switch-case component for conditional rendering in React.
 * Renders content based on matching a value against predefined cases.
 *
 * @template T - The type of the value to switch on (must be a valid object key)
 *
 * @example
 * // Basic usage with string value
 * <Switch
 *   value={status}
 *   cases={{
 *     loading: <LoadingSpinner />,
 *     error: <ErrorMessage />,
 *     success: <SuccessContent />,
 *     Default: <DefaultContent />
 *   }}
 * />
 *
 * @example
 * // Using with number value
 * <Switch
 *   value={errorCode}
 *   cases={{
 *     404: <NotFound />,
 *     500: <ServerError />,
 *     Default: <UnknownError />
 *   }}
 * />
 *
 * @example
 * // Using with boolean value
 * <Switch
 *   value={isAuthenticated}
 *   cases={{
 *     true: <AuthenticatedContent />,
 *     false: <LoginForm />,
 *   }}
 * />
 *
 * @param props - The props for the `Switch` component. See {@link SwitchProps}.
 *
 * @returns ReactElement that renders either:
 *          - The matching case's content if a match is found
 *          - The 'Default' case content if provided and no match is found
 *          - null if no match is found and no Default case is provided
 *
 * @remarks
 * - The component performs a strict equality check (===) for matching
 * - Cases must be valid object keys (string, number, or symbol)
 * - 'Default' is a special case that acts as a fallback
 * - Performance is O(1) as it uses direct object property access
 *
 * @since 1.0.0
 */
export default function Switch<T>({
  value,
  cases,
}: SwitchProps<T>): ReactElement | null {
  return <>{cases[value] ?? cases.Default ?? null}</>;
}
