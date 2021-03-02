import { Validator } from "./validator";

export class RequiredValidator extends Validator {
  constructor() {
    super((value) => !!value);
  }
}
