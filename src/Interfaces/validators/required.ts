import { Validator } from "./validator";

export class RequiredValidator<T> extends Validator<T> {
  constructor() {
    super((arg: T) => arg !== undefined);
  }
}
