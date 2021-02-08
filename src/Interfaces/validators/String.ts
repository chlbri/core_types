import { Exception } from "../exceptions/Exception";
import { Validator } from "./validator";

abstract class StringValidator extends Validator<string> {}

class StringMinLengthValidator extends StringValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value.length >= min);
  }
}

class StringMaxLengthValidator extends StringValidator {
  constructor(max: number) {
    super((value) => value.length <= max);
  }
}
class StringExactLengthValidator extends StringValidator {
  constructor(max: number) {
    super((value) => value.length === max);
  }
}

export {
  StringValidator,
  StringMinLengthValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
};
