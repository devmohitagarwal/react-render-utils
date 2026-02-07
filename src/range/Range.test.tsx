import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Range from "./Range";

describe("Range", () => {
  describe("basic range matching", () => {
    it("renders content for matching range", () => {
      render(
        <Range
          value={75}
          ranges={{
            "0-50": <span>low</span>,
            "51-100": <span>high</span>,
          }}
        />
      );
      expect(screen.getByText("high")).toBeInTheDocument();
    });

    it("renders first matching range when value is at boundary start", () => {
      render(
        <Range
          value={51}
          ranges={{
            "0-50": <span>low</span>,
            "51-100": <span>high</span>,
          }}
        />
      );
      expect(screen.getByText("high")).toBeInTheDocument();
    });

    it("renders matching range when value is at boundary end", () => {
      render(
        <Range
          value={50}
          ranges={{
            "0-50": <span>low</span>,
            "51-100": <span>high</span>,
          }}
        />
      );
      expect(screen.getByText("low")).toBeInTheDocument();
    });
  });

  describe("Default fallback", () => {
    it("renders Default when no range matches", () => {
      render(
        <Range
          value={200}
          ranges={{
            "0-100": <span>in range</span>,
            Default: <span>out of range</span>,
          }}
        />
      );
      expect(screen.getByText("out of range")).toBeInTheDocument();
    });

    it("renders null when no match and no Default", () => {
      const { container } = render(
        <Range
          value={200}
          ranges={{
            "0-100": <span>in range</span>,
          }}
        />
      );
      expect(container.innerHTML).toBe("");
    });
  });

  describe("negative numbers", () => {
    it("handles negative range start", () => {
      render(
        <Range
          value={-5}
          ranges={{
            "-10-0": <span>negative</span>,
            "1-10": <span>positive</span>,
          }}
        />
      );
      expect(screen.getByText("negative")).toBeInTheDocument();
    });
  });

  describe("invalid range strings", () => {
    it("skips invalid range strings and falls back to Default", () => {
      render(
        <Range
          value={5}
          ranges={{
            "abc": <span>bad</span>,
            Default: <span>fallback</span>,
          } as any}
        />
      );
      expect(screen.getByText("fallback")).toBeInTheDocument();
    });
  });

  describe("open-ended ranges", () => {
    it("matches open-ended range with + syntax", () => {
      render(
        <Range
          value={150}
          ranges={{
            "0-99": <span>under 100</span>,
            "100+": <span>100 or more</span>,
          }}
        />
      );
      expect(screen.getByText("100 or more")).toBeInTheDocument();
    });

    it("matches exactly at the open-ended boundary", () => {
      render(
        <Range
          value={100}
          ranges={{
            "0-99": <span>under 100</span>,
            "100+": <span>100 or more</span>,
          }}
        />
      );
      expect(screen.getByText("100 or more")).toBeInTheDocument();
    });

    it("matches large values in open-ended range", () => {
      render(
        <Range
          value={999999}
          ranges={{
            "0-99": <span>small</span>,
            "100+": <span>big</span>,
          }}
        />
      );
      expect(screen.getByText("big")).toBeInTheDocument();
    });

    it("does not match below open-ended boundary", () => {
      render(
        <Range
          value={99}
          ranges={{
            "100+": <span>big</span>,
            Default: <span>small</span>,
          }}
        />
      );
      expect(screen.getByText("small")).toBeInTheDocument();
    });

    it("handles negative open-ended range", () => {
      render(
        <Range
          value={5}
          ranges={{
            "-10+": <span>match</span>,
          }}
        />
      );
      expect(screen.getByText("match")).toBeInTheDocument();
    });
  });
});
