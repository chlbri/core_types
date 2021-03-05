import { generate4Tests } from "../test";
import { isNullish } from "./nullish";

generate4Tests(
  isNullish,
  [[undefined], ["e"], [null], [7]],
  [true, false, true, false]
);
