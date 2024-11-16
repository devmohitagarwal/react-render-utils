// Helper type to provide custom error messages
type ErrorMessage<T> = T extends boolean
  ? "🚫 Boolean values are not supported in <Switch>. Use <When> component for conditional rendering instead."
  : T extends JSPrimitive
  ? T
  : "🚫 Invalid type. <Switch> only accepts string or number values.";

// Custom branded type with error message
export type JSPrimitive = string | number;

// Custom type that will show the error message
export type ValidateSwitchValue<T> = T extends JSPrimitive
  ? T
  : ErrorMessage<T>;

export type SwitchProps<T> = {
  // Use ValidateSwitchValue to show custom error
  value: ValidateSwitchValue<T>;
  cases: Record<JSPrimitive | "Default", React.ReactNode>;
};
