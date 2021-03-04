import { generateTests } from "../test";
import { isNullish } from "./nullish";

generateTests(
  isNullish,
  [[undefined], ["e"], [null], [7]],
  [true, false, true, false]
);
