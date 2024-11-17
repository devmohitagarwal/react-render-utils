/**
 * Helper type to provide custom error messages for invalid types in the `Switch` component.
 *
 * @template T The type to validate.
 * @remarks
 * - If `T` is a boolean, it returns an error message advising the use of `<When>` instead.
 * - If `T` is a `JSPrimitive` (string or number), it allows the type.
 * - Otherwise, it returns an error message specifying that the type is invalid.
 */
type ErrorMessage<T> = T extends boolean
  ? "🚫 Boolean values are not supported in <Switch>. Use <When> component for conditional rendering instead."
  : T extends JSPrimitive
  ? T
  : "🚫 Invalid type. <Switch> only accepts string or number values.";

/**
 * Defines valid primitive types that `Switch` accepts.
 */
export type JSPrimitive = string | number;

/**
 * Custom type validator for the `Switch` component.
 *
 * @template T The type to validate.
 * @remarks
 * - If `T` is a valid `JSPrimitive` (string or number), it is allowed.
 * - Otherwise, it triggers the `ErrorMessage` helper type.
 */
export type ValidateSwitchValue<T> = T extends JSPrimitive
  ? T
  : ErrorMessage<T>;

/**
 * Props for the `Switch` component.
 *
 * @template T The type of the `value` prop.
 * @property {ValidateSwitchValue<T>} value - The value to determine which case to render.
 * @property {Record<JSPrimitive | "Default", React.ReactNode>} cases - An object mapping possible `value`s to `ReactNode` elements,
 * including a "Default" case for fallback rendering.
 */
export type SwitchProps<T> = {
  value: ValidateSwitchValue<T>;
  cases: Partial<Record<JSPrimitive | "Default", React.ReactNode>>;
};
