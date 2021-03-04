import { generate4Tests } from "../test/functions";
import { RequiredValidator } from "./required";

describe("Tests", () => {
  const validator = new RequiredValidator();
  generate4Tests(
    validator.validate,
    [[4], ["string"], [undefined], [null]],
    [true, true, false, false]
  );
});
