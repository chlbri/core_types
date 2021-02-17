import { Exception } from "../exceptions";
import { Validator } from "./validator";

class StringValidator extends Validator<string> {}

class StringMinLengthValidator extends StringValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value.length >= min, exception);
  }
}

class StringMaxLengthValidator extends StringValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value.length <= max, exception);
  }
}

class StringExactLengthValidator extends StringValidator {
  constructor(exact: number, exception?: Exception) {
    super((value) => value.length === exact, exception);
  }
}

class RequiredStringValidator extends Validator {
  constructor(exception?: Exception) {
    super((value) => typeof value === "string", exception);
  }
}

class FormatedNumberValidator extends StringValidator {
  constructor(exact: number, exception?: Exception) {
    super((value) => {
      const reg = new RegExp(`\\d{${exact}}`);
      return reg.test(value);
    }, exception);
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
