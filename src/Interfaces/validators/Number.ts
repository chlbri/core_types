import { Exception } from "../exceptions/Exception";
import { Validator } from "./validator";

abstract class NumberValidator extends Validator<number> {}

class NumberMinValidator extends NumberValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value > min, exception);
  }
}

class StringValueValidator extends NumberValidator {
  constructor(exact: number) {
    super((value) => value === exact);
  }
}

class NumberMaxValidator extends NumberValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value < max, exception);
  }
}

class RequiredNumberValidator<T> extends Validator<T> {
  constructor(value: T) {
    super((value) => typeof value === "number");
  }
}

export {
  NumberValidator,
  NumberMinValidator,
  NumberMaxValidator,
  StringValueValidator,
  RequiredNumberValidator,
};
