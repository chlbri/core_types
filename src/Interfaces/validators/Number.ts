import { Exception } from "../exceptions/Exception";
import { Validator } from "./Validator";

abstract class NumberValidator extends Validator<number> {}

class NumberMinValidator extends NumberValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value > min, exception);
  }
}

class NumberMaxValidator extends NumberValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value < max, exception);
  }
}

export { NumberValidator, NumberMinValidator, NumberMaxValidator };
