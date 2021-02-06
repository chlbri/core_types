import { Validator } from "./Validator";

abstract class StringValidator extends Validator<string> {}

class StringMinLengthValidator extends StringValidator {
  constructor(min: number) {
    super((value) => value.length > min);
  }
}

class StringMaxLengthValidator extends StringValidator {
  constructor(max: number) {
    super((value) => value.length < max);
  }
}

export {
  StringValidator,
  StringMinLengthValidator,
  StringMaxLengthValidator,
};
