import { decodeNumber } from "./16";

describe("Challenge 16: Descifrando los números...", () => {
  test("Should return 3", () => {
    expect(decodeNumber("...")).toEqual(3);
  });
  test("Should return 4", () => {
    expect(decodeNumber(".,")).toEqual(4);
  });
  test("Should return 6", () => {
    expect(decodeNumber(",.")).toEqual(6);
  });
  test("Should return 8", () => {
    expect(decodeNumber(",...")).toEqual(8);
  });
  test("Should return 107", () => {
    expect(decodeNumber(".........!")).toEqual(107);
  });
  test("Should return 49", () => {
    expect(decodeNumber(".;")).toEqual(49);
  });
  test("Should return 5", () => {
    expect(decodeNumber("..,")).toEqual(5);
  });
  test("Should return 95", () => {
    expect(decodeNumber("..,!")).toEqual(95);
  });
  test("Should return 300", () => {
    expect(decodeNumber("!!!")).toEqual(300);
  });
  test("Should return 50", () => {
    expect(decodeNumber(";!")).toEqual(50);
  });
  test("Should return NaN", () => {
    expect(decodeNumber(";.W")).toEqual(NaN);
  });
});
