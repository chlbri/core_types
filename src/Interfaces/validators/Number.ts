import { Exception } from "../exceptions/Exception";
import { Validator } from "./validator";

class NumberValidator extends Validator<number> {}

class NumberMinValidator extends NumberValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value >= min, exception);
  }
}

class StringValueValidator extends NumberValidator {
  constructor(exact: number, exception?: Exception) {
    super((value) => value === exact, exception);
  }
}

class NumberMaxValidator extends NumberValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value <= max, exception);
  }
}

class RequiredNumberValidator extends Validator {
  constructor(exception?: Exception) {
    super((value) => typeof value === "number", exception);
  }
}

export {
  NumberValidator,
  NumberMinValidator,
  NumberMaxValidator,
  StringValueValidator,
  RequiredNumberValidator,
};
