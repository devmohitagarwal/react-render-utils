import { ReactElement, ReactNode } from "react";

export type WhenProps = {
  value: boolean;
  then: ReactElement | string | number;
  otherwise?: ReactElement | string | number | null;
};
