// types.ts
import { ReactNode } from 'react';

/**
 * Defines valid primitive types that the Switch component accepts
 * 
 * @remarks
 * Currently limited to string and number to ensure type safety and
 * predictable behavior. Boolean values are intentionally excluded
 * as they should use the When component instead.
 * 
 * @public
 */
export type JSPrimitive = string | number;

/**
 * Helper type that provides custom type validation messages
 * 
 * @typeParam T - The type to validate
 * @internal
 */
type ErrorMessage<T> = T extends boolean
  ? "🚫 Boolean values are not supported in Switch. Use the When component instead."
  : T extends JSPrimitive
  ? T
  : "🚫 Invalid type. Switch only accepts string or number values.";

/**
 * Type validator for the Switch component's value prop
 * 
 * @typeParam T - The type to validate
 * @remarks
 * This type provides compile-time validation and helpful error messages
 * for invalid value types. It ensures type safety while maintaining
 * a good developer experience through clear error messaging.
 * 
 * @example
 * ```typescript
 * // Valid usage
 * type ValidString = ValidateSwitchValue<string>; // resolves to string
 * type ValidNumber = ValidateSwitchValue<number>; // resolves to number
 * 
 * // Invalid usage (will show error message)
 * type Invalid = ValidateSwitchValue<boolean>;
 * type AlsoInvalid = ValidateSwitchValue<object>;
 * ```
 * 
 * @public
 */
export type ValidateSwitchValue<T> = T extends JSPrimitive
  ? T
  : ErrorMessage<T>;

/**
 * Props interface for the Switch component
 * 
 * @typeParam T - The type of the value prop (must extend JSPrimitive)
 * 
 * @remarks
 * This interface defines the shape of props accepted by the Switch component.
 * It includes runtime type validation through ValidateSwitchValue and
 * ensures type safety for the cases object.
 * 
 * @example
 * ```typescript
 * // String-based switch
 * type StringProps = SwitchProps<string>;
 * 
 * // Number-based switch
 * type NumberProps = SwitchProps<number>;
 * ```
 * 
 * @property value - The value to match against cases
 * @property cases - Object mapping values to React nodes
 * 
 * @public
 */
export interface SwitchProps<T> {
  /**
   * The value to match against cases
   * @remarks
   * Must be either a string or number. Boolean values are not supported
   * and will result in a compile-time error.
   */
  value: ValidateSwitchValue<T>;

  /**
   * Mapping of possible values to React nodes
   * @remarks
   * - Each key must match the type of the value prop
   * - The special "Default" key is optional and serves as a fallback
   * - Values must be valid React nodes
   */
  cases: Partial<Record<ValidateSwitchValue<T> | "Default", ReactNode>>;
}