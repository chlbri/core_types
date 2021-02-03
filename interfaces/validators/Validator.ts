import { CoreTypes } from "../../Types";
import Exception, { DEFAULT_EXCEPTION } from "../Exceptions";

type Condition<T = any> = (arg: T) => boolean;

export default abstract class Validator<T extends CoreTypes> {
  constructor(
    public validate: Condition<T>,
    public exception: Exception = DEFAULT_EXCEPTION
  ) {}
}
