import { Exception } from "./exception";
import { Condition, Validator } from "./validator";
export declare class NumberValidator extends Validator<number> {
    constructor(validate: Condition<number>, exception?: Exception);
}
export declare class NumberMinValidator extends NumberValidator {
    constructor(min: number, exception?: Exception);
}
export declare class NumberExactValidator extends NumberValidator {
    constructor(exact: number, exception?: Exception);
}
export declare class NumberMaxValidator extends NumberValidator {
    constructor(max: number, exception?: Exception);
}
export declare class RequiredNumberValidator extends Validator {
    constructor(exception?: Exception);
}
