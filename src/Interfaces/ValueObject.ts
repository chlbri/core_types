import { Exception, IValidator } from "../validators";

type ReadonlyValidators<T> = IValidator<T>[];

// TODO : Create test
export class ValueObject<
  T = any,
  V extends ReadonlyValidators<T> = any
> {
  constructor(private value: T, public validators: V) {
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

  chain(next: ValueObject): ValueObject {
    return this.isValid ? next : this;
  }
}

export type SimpleObject<T> = T extends ValueObject<infer R>
  ? R
  : T extends (...args: any[]) => any
  ? never
  : T;
