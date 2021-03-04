import { Exception } from "./exception";

export type Condition<T = any> = (arg: T) => boolean;

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
    public exception: Exception = new Exception(404)
  ) {}

  // toString(): string {
  //   return `Validator ==> { validate : ${this.validate}, exception : ${this.exception}`;
  // }
}
