import { contarOvejas } from "./01";

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

describe("Challenge 1: Contando ovejas para dormir", () => {
  test("should return red sheeps and those whose name contains n and a", () => {
    expect(contarOvejas(ovejas)).toEqual([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" }
    ]);
  });
});
