import { ReactNode } from "react";
import { WhenProps } from "./Types";

export default function When({
  value,
  then,
  otherwise = null,
}: WhenProps): ReactNode {
  return value ? then : otherwise;
}
