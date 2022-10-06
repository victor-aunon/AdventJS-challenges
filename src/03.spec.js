import { isValid } from "./03";

describe("Challenge 3: El Grinch quiere fastidiar la Navidad", () => {
  test("should return true to this valid letter", () => {
    const carta = "bici coche (balón) bici coche peluche";
    expect(isValid(carta)).toEqual(true)
  });
  test("should return true to this valid letter", () => {
    const carta = "(muñeca) consola bici";
    expect(isValid(carta)).toEqual(true)
  });
  test("should return false to this invalid letter", () => {
    const carta = "bici coche (balón bici coche";
    expect(isValid(carta)).toEqual(false)
  });
  test("should return false to this invalid letter", () => {
    const carta = "peluche (bici [coche) bici coche balón";
    expect(isValid(carta)).toEqual(false)
  });
  test("should return false to this invalid letter", () => {
    const carta = "(peluche {) bici";
    expect(isValid(carta)).toEqual(false)
  });
  test("should return false to this invalid letter", () => {
    const carta = "() bici";
    expect(isValid(carta)).toEqual(false)
  });
});
