import { isNullish } from "../functions";
import { Exception } from "./exception";
import { Validator } from "./validator";

export class RequiredValidator extends Validator {
  constructor(exception?: Exception) {
    super((value) => !isNullish(value), exception);
  }
}
