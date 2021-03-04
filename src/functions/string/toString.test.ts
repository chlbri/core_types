import { toString } from "./toString";
import { generate5Tests } from "../../test";

describe("Tests", () => {
  generate5Tests(
    toString,
    [[1], [2], [3, 4], ["true"], [false]],
    [["1"], ["2"], ["3", "4"], ["true"], ["false"]]
  );
});
