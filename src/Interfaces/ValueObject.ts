import { Exception, IValidator } from "../validators";

type RV<T> = readonly IValidator<T>[];

export class ValueObject<T = any, V extends RV<T> = any> {
  constructor(private value: T, public validators?: V) {
    this.chain = this.chain.bind(this);
  }

  get unSafe(): T {
    return this.value;
  }

  validate(){

  }

  get safe() {
    if (!this.validators) return this.value;
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
