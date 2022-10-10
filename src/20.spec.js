import { pangram } from "./20";

describe("Challenge 20: ¿Una carta de pangramas? ¡QUÉ!", () => {
  test("Should return true if letter is a pangram", () => {
    expect(
      pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")
    ).toEqual(true);
  });
  test("Should return true if letter is a pangram", () => {
    expect(
      pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
    ).toEqual(true);
  });
  test("Should return false if letter is not a pangram", () => {
    expect(
      pangram("Esto es una frase larga pero no tiene todas las letras del abecedario")
    ).toEqual(false);
  });
  test("Should return false if letter is not a pangram", () => {
    expect(
      pangram("De la a a la z, nos faltan letras")
    ).toEqual(false);
  });
});
