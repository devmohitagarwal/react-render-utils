import When from "./When";
import Switch from "./Switch";
import Range from "./Range";
import React from "react";

export { When, Switch, Range };

function TestArena() {
  return (
    <Range
      value={1}
      ranges={{
        "1-2": <div></div>,
      }}
    />
  );
}
