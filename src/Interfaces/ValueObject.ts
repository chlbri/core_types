import { CoreTypes } from "../Types";
import { Exception, UNKNOWN_EXCEPTION } from "./Exceptions";
import { Validator } from "./validators";

export abstract class ValueObject<T extends CoreTypes> {
  constructor(private value: T, private validators: Validator<T>[]) {
    this.chain = this.chain.bind(this);
  }

  get unSafe(): T {
    return this.value;
  }

  get safe() {
    for (const validator of this.validators) {
      if (!validator.validate(this.value)) return validator.exception;
      return this.value;
    }
    return UNKNOWN_EXCEPTION;
  }

  get isValid() {
    return !(this.value instanceof Exception);
  }

  chain<N extends CoreTypes>(next: ValueObject<N>) {
    return this.isValid ? next : this;
  }
}
