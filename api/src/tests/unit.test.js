require("dotenv").config();
import "cross-fetch/polyfill";
import Helpers from "../utils/Helpers";

afterAll(() => setTimeout(() => process.exit(), 1000));

describe("Tests the Helpers", () => {
  it("should test correct ISO date format", () => {
    expect(Helpers.isIsoDate("1970-01-01T00:00:00Z")).toBe(true);
  });

  it("should test wrong ISO date format", () => {
    expect(Helpers.isIsoDate("1970-01-01")).toBe(false);
  });

  it("should test correct code format", () => {
    expect(Helpers.isValidCodeFormat("AA-AAA-11")).toBe(true);
  });

  it("should test wrong code format", () => {
    expect(Helpers.isIsoDate("AA-AA-11")).toBe(false);
  });
});
