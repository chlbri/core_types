import { Validator } from "./validator";

export class RequiredValidato extends Validator {
  constructor() {
    super((value) => value !== undefined && value !== null);
  }
}
