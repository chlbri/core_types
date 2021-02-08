import { Exception } from "./exceptions";
import { Validator } from "./validators";

export abstract class ValueObject<T> {
  constructor(private value: T, private validators: Validator<T>[]) {
    this.chain = this.chain.bind(this);
  }

  get unSafe(): T {
    return this.value;
  }

  get safe() {
    for (const validator of this.validators) {
      if (!validator.validate(this.value)) return validator.exception;
    }
    return this.value;
  }

  get isValid() {
    return !(this.safe instanceof Exception);
  }

  chain<N>(next: ValueObject<N>) {
    return this.isValid ? next : this;
  }
}
