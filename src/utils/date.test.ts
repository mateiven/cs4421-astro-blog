import { describe, expect, it } from "vitest";
import { fridayMessage } from "./date";

describe("fridayMessage", () => {
  it("says Thank God it's Friday when it is Friday", () => {
    const friday = new Date("2026-09-25");

    expect(fridayMessage(friday)).toBe("Thank God it's Friday");
  });

  it("says Not Friday when it is not Friday", () => {
    const monday = new Date("2026-09-21");

    expect(fridayMessage(monday)).toBe("Not Friday");
  });
});