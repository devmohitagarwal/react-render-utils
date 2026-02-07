import { pluralise, pluraliseWithCount } from "./pluralise";

describe("pluralise", () => {
  it("returns singular when count is 1", () => {
    expect(pluralise(1, "apple", "apples")).toBe("apple");
  });

  it("returns plural when count is 0", () => {
    expect(pluralise(0, "apple", "apples")).toBe("apples");
  });

  it("returns plural when count is greater than 1", () => {
    expect(pluralise(2, "apple", "apples")).toBe("apples");
  });

  it("returns plural for negative counts", () => {
    expect(pluralise(-1, "apple", "apples")).toBe("apples");
  });
});

describe("pluraliseWithCount", () => {
  it("returns count and singular for 1", () => {
    expect(pluraliseWithCount(1, "apple")).toBe("1 apple");
  });

  it("returns count and default plural for > 1", () => {
    expect(pluraliseWithCount(2, "apple")).toBe("2 apples");
  });

  it("returns count and default plural for 0", () => {
    expect(pluraliseWithCount(0, "apple")).toBe("0 apples");
  });

  describe("zeroText parameter", () => {
    it("returns zeroText when count is 0 and zeroText provided", () => {
      expect(pluraliseWithCount(0, "apple", "No apples")).toBe("No apples");
    });

    it("ignores zeroText when count is not 0", () => {
      expect(pluraliseWithCount(2, "apple", "No apples")).toBe("2 apples");
    });
  });

  describe("custom plural", () => {
    it("uses custom plural form", () => {
      expect(pluraliseWithCount(2, "child", undefined, "children")).toBe(
        "2 children"
      );
    });

    it("uses custom plural for 0 without zeroText", () => {
      expect(pluraliseWithCount(0, "child", undefined, "children")).toBe(
        "0 children"
      );
    });
  });

  describe("hideCount", () => {
    it("hides count when hideCount is true", () => {
      expect(
        pluraliseWithCount(2, "apple", undefined, undefined, true)
      ).toBe("apples");
    });

    it("hides count with singular form", () => {
      expect(
        pluraliseWithCount(1, "apple", undefined, undefined, true)
      ).toBe("apple");
    });

    it("hides count for 0 without zeroText", () => {
      expect(
        pluraliseWithCount(0, "apple", undefined, undefined, true)
      ).toBe("apples");
    });
  });
});
