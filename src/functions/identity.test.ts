import { generate6Tests } from "../test";
import { identity } from "./identity";

describe("Tests", () => {
  const spy = generate6Tests(
    identity,
    [[1], [2], [3], [4], ["true"], [false]],
    [1, 2, 3, 4, "true", false]
  ).spy;
});
