import { Exception } from "../exceptions";
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
  constructor(exact: number) {
    super((value) => value.length === exact);
  }
}

class RequiredStringValidator<T> extends Validator<T> {
  constructor(value: T) {
    super((value) => typeof value === "string");
  }
}

export {
  StringValidator,
  StringMinLengthValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
  RequiredStringValidator,
};
