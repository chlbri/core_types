import { generate19Tests } from "../test/functions";
import { TupleOf } from "../types";

export function generateStatusTests(
  func: (...val: [number]) => boolean,
  expecteds: TupleOf<boolean, 19>
) {
  return generate19Tests(
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
    ],
    expecteds
  );
}
