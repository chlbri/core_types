import { Exception } from "../exceptions";
declare type Condition<T = any> = (arg: T) => boolean;
declare class Validator<T> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
export { Condition, Validator };
