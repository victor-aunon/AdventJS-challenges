import { listarRegalos } from "./02";

const carta = "bici coche balón _playstation bici coche peluche";

describe("Challenge 2: Ayuda al elfo a listar los regalos", () => {
  test("should return an object with the uniques gifts and their count", () => {
    expect(listarRegalos(carta)).toEqual(
      {bici: 2, coche: 2, "balón": 1, peluche: 1},
    );
  });
});
