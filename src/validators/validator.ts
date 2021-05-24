import { Exception, EXCEPTIONS } from "./exception";

export type Condition<T = any> = (arg?: T) => boolean;

export type ConditionMany<T extends any[] = any[]> = (
  ...arg: T
) => boolean;

export interface IValidator<T = any> {
  validate: Condition<T>;
  exception: Exception;
}
export interface IValidatorMany<T extends any[] = any[]> {
  validate: ConditionMany<T>;
  exception: Exception;
}

export class Validator<T = any> implements IValidator<T> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = EXCEPTIONS[404]
  ) {}
  chain(
    validator: Validator<T>,
    exception: Exception = EXCEPTIONS[404]
  ) {
    const out = new Validator(
      (arg?: T) =>
        this.validate(arg) && validator.validate(arg),
      exception
    );
    return out;
  }
}
