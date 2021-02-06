import { DEFAULT_EXCEPTION, Exception } from "../exceptions";

type Condition<T = any> = (arg: T) => boolean;

class Validator<T> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = DEFAULT_EXCEPTION
  ) {}
}

export { Condition, Validator };
