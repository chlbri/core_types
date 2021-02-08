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
  constructor() {
    super((value) => typeof value === "string");
  }
}

class FormatedNumberValidator extends StringValidator {
  constructor(exact: number) {
    super((value) => {
      const reg = new RegExp(`\\d{${exact}}`);
      return reg.test(value);
    });
  }
}

export {
  StringValidator,
  StringMinLengthValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
  RequiredStringValidator,
  FormatedNumberValidator,
};
