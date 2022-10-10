import { canReconfigure } from "./23";

describe("Challenge 23: ¿Puedes reconfigurar las fábricas para no parar de crear regalos?", () => {
  test("Should return true", () => {
    expect(canReconfigure("BAL", "LIB")).toEqual(true);
  });

  test("Should return true", () => {
    expect(canReconfigure("CON", "JUU")).toEqual(false);
  });

  test("Should return true", () => {
    expect(canReconfigure("XBOX", "XXBO")).toEqual(false);
  });

  test("Should return true", () => {
    expect(canReconfigure("XBOX", "XOBX")).toEqual(true);
  });

  test("Should return true", () => {
    expect(canReconfigure("MMM", "MID")).toEqual(false);
  });

  test("Should return true", () => {
    expect(canReconfigure("AA", "MID")).toEqual(false);
  });
});
