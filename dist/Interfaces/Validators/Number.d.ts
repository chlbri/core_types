import { Exception } from "../exceptions/Exception";
import { Validator } from "./validator";
declare class NumberValidator extends Validator<number> {
}
declare class NumberMinValidator extends NumberValidator {
    constructor(min: number, exception?: Exception);
}
declare class StringValueValidator extends NumberValidator {
    constructor(exact: number, exception?: Exception);
}
declare class NumberMaxValidator extends NumberValidator {
    constructor(max: number, exception?: Exception);
}
declare class RequiredNumberValidator extends Validator {
    constructor(exception?: Exception);
}
export { NumberValidator, NumberMinValidator, NumberMaxValidator, StringValueValidator, RequiredNumberValidator, };
