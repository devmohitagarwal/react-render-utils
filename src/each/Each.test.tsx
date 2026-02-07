import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Each from "./Each";

describe("Each", () => {
  describe("rendering items", () => {
    it("renders each item using the render function", () => {
      const items = ["Alice", "Bob", "Charlie"];
      render(
        <Each
          of={items}
          render={(item, index) => <span key={index}>{item}</span>}
        />
      );
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.getByText("Charlie")).toBeInTheDocument();
    });

    it("passes correct index to render function", () => {
      const items = ["a", "b"];
      render(
        <Each
          of={items}
          render={(item, index) => (
            <span key={index}>
              {index}:{item}
            </span>
          )}
        />
      );
      expect(screen.getByText("0:a")).toBeInTheDocument();
      expect(screen.getByText("1:b")).toBeInTheDocument();
    });
  });

  describe("empty state", () => {
    it("renders empty content when array is empty", () => {
      render(
        <Each
          of={[]}
          render={(item: string) => <span>{item}</span>}
          empty={<span>no items</span>}
        />
      );
      expect(screen.getByText("no items")).toBeInTheDocument();
    });

    it("renders null when array is empty and no empty prop", () => {
      const { container } = render(
        <Each of={[]} render={(item: string) => <span>{item}</span>} />
      );
      expect(container.innerHTML).toBe("");
    });
  });

  describe("null/undefined handling", () => {
    it("renders empty content when of is null", () => {
      render(
        <Each
          of={null}
          render={(item: string) => <span>{item}</span>}
          empty={<span>nothing</span>}
        />
      );
      expect(screen.getByText("nothing")).toBeInTheDocument();
    });

    it("renders empty content when of is undefined", () => {
      render(
        <Each
          of={undefined}
          render={(item: string) => <span>{item}</span>}
          empty={<span>nothing</span>}
        />
      );
      expect(screen.getByText("nothing")).toBeInTheDocument();
    });

    it("renders null when of is null and no empty prop", () => {
      const { container } = render(
        <Each of={null} render={(item: string) => <span>{item}</span>} />
      );
      expect(container.innerHTML).toBe("");
    });

    it("renders null when of is undefined and no empty prop", () => {
      const { container } = render(
        <Each of={undefined} render={(item: string) => <span>{item}</span>} />
      );
      expect(container.innerHTML).toBe("");
    });
  });

  describe("type inference", () => {
    it("works with complex object types", () => {
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];
      render(
        <Each
          of={users}
          render={(user) => <span key={user.id}>{user.name}</span>}
        />
      );
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
    });
  });
});
