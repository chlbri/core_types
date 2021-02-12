import { DEFAULT_EXCEPTION, Exception } from "../exceptions";

type Condition<T = any> = (arg: T) => boolean;

interface IValidator<T = any> {
  validate: Condition<T>;
  exception: Exception;
}

class Validator<T = any> implements IValidator<T> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = DEFAULT_EXCEPTION
  ) {}
}

export { Condition, Validator, IValidator };
