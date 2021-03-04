import { generateTests } from "../test";
import { isArray } from "./array";

generateTests(
  isArray,
  [[1], [2], [[3, 4]], ["true"], [false]],
  [false, false, true, false, false]
);
