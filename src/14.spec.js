import { missingReindeer } from "./14";

describe("Challenge 14: En busca del reno perdido", () => {
  test("Should return id 1", () => {
    expect(missingReindeer([0, 2, 3])).toEqual(1)
  })
  test("Should return id 4", () => {
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toEqual(4)
  })
  test("Should return id 2", () => {
    expect(missingReindeer([0, 1])).toEqual(2)
  })
  test("Should return id 2", () => {
    expect(missingReindeer([3, 0, 1])).toEqual(2)
  })
  test("Should return id 8", () => {
    expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toEqual(8)
  })
  test("Should return id 1", () => {
    expect(missingReindeer([0])).toEqual(1)
  })
})