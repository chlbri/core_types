import Validator from "./Validator";

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

class StringMinMaxLengthValidator extends StringValidator {
  constructor(min: number, max: number) {
    super((value) => value.length > min && value.length < max);
  }
}

export {
  StringMinLengthValidator,
  StringMaxLengthValidator,
  StringMinMaxLengthValidator,
};
