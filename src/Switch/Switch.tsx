import { JSPrimitive, SwitchProps } from "./Types";

// Example implementation
export default function Switch<T>({ value, cases }: SwitchProps<T>) {
  return cases[value as JSPrimitive] ?? cases.Default ?? null;
}
