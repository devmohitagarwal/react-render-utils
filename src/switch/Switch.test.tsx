import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Switch from "./Switch";

describe("Switch", () => {
  describe("string matching", () => {
    it("renders the matching case", () => {
      render(
        <Switch
          value="b"
          cases={{
            a: <span>A</span>,
            b: <span>B</span>,
            c: <span>C</span>,
          }}
        />
      );
      expect(screen.getByText("B")).toBeInTheDocument();
    });

    it("renders Default when no case matches", () => {
      render(
        <Switch
          value="z"
          cases={{
            a: <span>A</span>,
            Default: <span>fallback</span>,
          }}
        />
      );
      expect(screen.getByText("fallback")).toBeInTheDocument();
    });

    it("renders null when no match and no Default", () => {
      const { container } = render(
        <Switch
          value="z"
          cases={{
            a: <span>A</span>,
          }}
        />
      );
      expect(container.innerHTML).toBe("");
    });
  });

  describe("number matching", () => {
    it("renders the matching numeric case", () => {
      render(
        <Switch
          value={404}
          cases={{
            200: <span>OK</span>,
            404: <span>Not Found</span>,
            500: <span>Server Error</span>,
          }}
        />
      );
      expect(screen.getByText("Not Found")).toBeInTheDocument();
    });
  });

  describe("Default fallback", () => {
    it("prefers exact match over Default", () => {
      render(
        <Switch
          value="a"
          cases={{
            a: <span>exact</span>,
            Default: <span>fallback</span>,
          }}
        />
      );
      expect(screen.getByText("exact")).toBeInTheDocument();
    });
  });
});
