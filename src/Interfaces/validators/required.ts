import { Validator } from "./validator";

export class RequiredValidator<T> extends Validator<T> {
  constructor() {
    super((value: T) => value !== undefined && value !== null);
  }
}
