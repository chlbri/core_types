import { CoreTypes } from "../../Types";
import { Exception } from "../Exceptions";
declare type Condition<T = any> = (arg: T) => boolean;
declare abstract class Validator<T extends CoreTypes> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
export { Condition, Validator };
