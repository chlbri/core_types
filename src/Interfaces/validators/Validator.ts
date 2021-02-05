import { CoreTypes } from "../../Types";
import { DEFAULT_EXCEPTION, Exception } from "../Exceptions";

type Condition<T = any> = (arg: T) => boolean;

abstract class Validator<T extends CoreTypes> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = DEFAULT_EXCEPTION
  ) {}
}

export { Condition, Validator };
