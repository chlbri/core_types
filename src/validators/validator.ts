import { Exception } from "./exception";

type Condition<T = any> = (arg: T) => boolean;

interface IValidator<T = any> {
  validate: Condition<T>;
  exception: Exception;
}

class Validator<T = any> implements IValidator<T> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = new Exception(404)
  ) {}
}

console.log("====================================");
console.log(Array.from({ length: 100 }, (_, i) => i));

console.log(new Array(100));
console.log("====================================");

export { Condition, Validator, IValidator };
