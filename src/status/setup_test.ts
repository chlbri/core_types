import { generateTests } from "../test/functions";

export function generateStatusTests(
  func: (...val: [number]) => boolean,
  expecteds: boolean[]
) {
  return generateTests(
    func,
    [
      [4],
      [100],
      [101],
      [104],
      [200],
      [202],
      [204],
      [300],
      [303],
      [304],
      [400],
      [404],
      [500],
      [504],
      [505],
      [1000],
      [700],
      [6000],
      [6041],
      [900],
      [941],
    ],
    expecteds
  );
}
