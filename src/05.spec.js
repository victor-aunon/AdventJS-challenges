import { daysToXmas } from "./05";

describe("Challenge 5: Contando los días para los regalos", () => {
  test("Should return 24 days", () => {
    const date = new Date("Dec 1, 2021");
    expect(daysToXmas(date)).toEqual(24);
  });
  test("Should return 1 day", () => {
    const date = new Date("Dec 24, 2021 00:00:01");
    expect(daysToXmas(date)).toEqual(1);
  });
  test("Should return 1 day", () => {
    const date = new Date("Dec 24, 2021 23:59:59");
    expect(daysToXmas(date)).toEqual(1);
  });
  test("Should return 5 days", () => {
    const date = new Date("December 20, 2021 03:24:00");
    expect(daysToXmas(date)).toEqual(5);
  });
  test("Should return 0 days", () => {
    const date = new Date("Dec 25, 2021");
    expect(daysToXmas(date)).toEqual(0);
  });
  test("Should return -1 day", () => {
    const date = new Date("Dec 26, 2021");
    expect(daysToXmas(date)).toEqual(-1);
  });
  test("Should return -6 days", () => {
    const date = new Date("Dec 31, 2021");
    expect(daysToXmas(date)).toEqual(-6);
  });
  test("Should return -7 days", () => {
    const date = new Date("Jan 1, 2022 00:00:01");
    expect(daysToXmas(date)).toEqual(-7);
  });
  test("Should return -7 days", () => {
    const date = new Date("Jan 1, 2022 23:59:59");
    expect(daysToXmas(date)).toEqual(-7);
  });
});
