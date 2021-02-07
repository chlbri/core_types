import { Exception } from "../exceptions";
declare type Condition<T = any> = (arg: T) => boolean;
declare abstract class Validator<T> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
export { Condition, Validator };
