import Validator from "./Validator";

abstract class NumberValidator extends Validator<number> {}

class NumberMinValidator extends NumberValidator {
  constructor(min: number) {
    super((value) => value > min);
  }
}

class NumberMaxValidator extends NumberValidator {
  constructor(max: number) {
    super((value) => value < max);
  }
}

class NumberMinMaxValidator extends NumberValidator {
  constructor(min: number, max: number) {
    super((value) => value > min && value < max);
  }
}

export { NumberMinValidator, NumberMaxValidator, NumberMinMaxValidator };
