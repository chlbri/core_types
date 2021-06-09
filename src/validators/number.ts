import { isNullish } from "../functions";
import { Exception } from "./exception";
import { Condition, Validator } from "./validator";

export class NumberValidator extends Validator<number> {
  constructor(validate: Condition<number>, exception?: Exception) {
    super((value) => !isNullish(value) && validate(value), exception);
  }
}

export class NumberMinValidator extends NumberValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value! >= min, exception);
  }
}

export class NumberExactValidator extends NumberValidator {
  constructor(exact: number, exception?: Exception) {
    super((value) => value === exact, exception);
  }
}

export class NumberMaxValidator extends NumberValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value! <= max, exception);
  }
}

export class RequiredNumberValidator extends Validator {
  constructor(exception?: Exception) {
    super((value) => {
      return typeof value === "number";
    }, exception);
  }
}
