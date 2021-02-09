import { Exception } from "../exceptions/Exception";
import { Validator } from "./validator";
declare class NumberValidator extends Validator<number> {
}
declare class NumberMinValidator extends NumberValidator {
    constructor(min: number, exception?: Exception);
}
declare class StringValueValidator extends NumberValidator {
    constructor(exact: number);
}
declare class NumberMaxValidator extends NumberValidator {
    constructor(max: number, exception?: Exception);
}
declare class RequiredNumberValidator<T> extends Validator<T> {
    constructor(value: T);
}
export { NumberValidator, NumberMinValidator, NumberMaxValidator, StringValueValidator, RequiredNumberValidator, };
