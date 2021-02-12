import { Exception } from "../exceptions";
declare type Condition<T = any> = (arg: T) => boolean;
interface IValidator<T = any> {
    validate: Condition<T>;
    exception: Exception;
}
declare class Validator<T = any> implements IValidator<T> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
export { Condition, Validator, IValidator };
