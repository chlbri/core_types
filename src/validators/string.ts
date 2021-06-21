import { isNullish } from '../functions/nullish';
import { Nullish } from '../types';
import { Exception } from './exception';
import { Condition, Validator } from './validator';

export class StringValidator extends Validator<string> {
  constructor(
    validate: Condition<string>,
    exception?: Exception,
  ) {
    super(
      (value) => !isNullish(value) && validate(value),
      exception,
    );
  }
}

export class StringMinLengthValidator extends StringValidator {
  constructor(min: number, exception?: Exception) {
    super((value) => value!.length >= min, exception);
  }
}

export class StringExactLengthValidator extends StringValidator {
  constructor(exact: number, exception?: Exception) {
    super((value) => value!.length === exact, exception);
  }
}

export class StringMaxLengthValidator extends StringValidator {
  constructor(max: number, exception?: Exception) {
    super((value) => value!.length <= max, exception);
  }
}

export class StringRequiredValidator extends Validator {
  constructor(exception?: Exception) {
    super((value) => typeof value === 'string', exception);
  }
}

export class FormatedNumberValidator extends StringValidator {
  constructor(num?: Nullish<number>, exception?: Exception) {
    super((value) => {
      const reg = new RegExp(
        `^\\d${isNullish(num) ? '+' : `{${num}}`}$`,
      );
      return reg.test(value!);
    }, exception);
  }
}
