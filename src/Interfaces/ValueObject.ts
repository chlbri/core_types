import { Exception } from "./exceptions";
import { IValidator } from "./validators";

type ReadonlyValidators<T> = IValidator<T>[];

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

  chain<N, VO extends ReadonlyValidators<N>>(
    next: ValueObject<N, VO>
  ): VO extends V ? this : ValueObject<N, VO>;

  chain(next: any) {
    return this.isValid ? next : this;
  }
}

export type SimpleObject<T> = T extends ValueObject<infer R>
  ? R
  : T extends (...args: any[]) => any
  ? never
  : T;
