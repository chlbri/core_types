import { Exception } from "./exception";
export declare type Condition<T = any> = (arg: T) => boolean;
export declare type ConditionMany<T extends any[] = any[]> = (...arg: T) => boolean;
export interface IValidator<T = any> {
    validate: Condition<T>;
    exception: Exception;
}
export interface IValidatorMany<T extends any[] = any[]> {
    validate: ConditionMany<T>;
    exception: Exception;
}
export declare class Validator<T = any> implements IValidator<T> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
