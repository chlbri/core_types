import { generate4Tests } from "../test/functions";
import { RequiredValidator } from "./required";

const validator = new RequiredValidator();
generate4Tests(
  validator.validate,
  [[4], ["string"], [undefined], [null]],
  [true, true, false, false]
);
