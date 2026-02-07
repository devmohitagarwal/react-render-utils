import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import When from "./When";

describe("When", () => {
  describe("truthy values", () => {
    it("renders then when value is a non-empty string", () => {
      render(<When value="hello" then={<span>yes</span>} />);
      expect(screen.getByText("yes")).toBeInTheDocument();
    });

    it("renders then when value is a number", () => {
      render(<When value={42} then={<span>yes</span>} />);
      expect(screen.getByText("yes")).toBeInTheDocument();
    });

    it("renders then when value is true", () => {
      render(<When value={true} then={<span>yes</span>} />);
      expect(screen.getByText("yes")).toBeInTheDocument();
    });

    it("renders then when value is an object", () => {
      render(<When value={{ a: 1 }} then={<span>yes</span>} />);
      expect(screen.getByText("yes")).toBeInTheDocument();
    });
  });

  describe("falsy values", () => {
    it("renders otherwise when value is null", () => {
      render(
        <When value={null} then={<span>yes</span>} otherwise={<span>no</span>} />
      );
      expect(screen.getByText("no")).toBeInTheDocument();
    });

    it("renders otherwise when value is undefined", () => {
      render(
        <When value={undefined} then={<span>yes</span>} otherwise={<span>no</span>} />
      );
      expect(screen.getByText("no")).toBeInTheDocument();
    });

    it("renders otherwise when value is false", () => {
      render(
        <When value={false} then={<span>yes</span>} otherwise={<span>no</span>} />
      );
      expect(screen.getByText("no")).toBeInTheDocument();
    });

    it("renders otherwise when value is 0", () => {
      render(
        <When value={0} then={<span>yes</span>} otherwise={<span>no</span>} />
      );
      expect(screen.getByText("no")).toBeInTheDocument();
    });

    it("renders otherwise when value is empty string", () => {
      render(
        <When value="" then={<span>yes</span>} otherwise={<span>no</span>} />
      );
      expect(screen.getByText("no")).toBeInTheDocument();
    });
  });

  describe("function callbacks", () => {
    it("calls then callback with non-nullable value when truthy", () => {
      render(
        <When
          value="hello"
          then={(val) => <span>got {val}</span>}
        />
      );
      expect(screen.getByText("got hello")).toBeInTheDocument();
    });

    it("calls otherwise callback when falsy", () => {
      render(
        <When
          value={null}
          then={<span>yes</span>}
          otherwise={() => <span>fallback</span>}
        />
      );
      expect(screen.getByText("fallback")).toBeInTheDocument();
    });
  });

  describe("missing otherwise", () => {
    it("renders nothing when value is falsy and no otherwise provided", () => {
      const { container } = render(
        <When value={null} then={<span>yes</span>} />
      );
      expect(container.textContent).toBe("");
    });
  });
});
