import { Exception } from "../exceptions/Exception";
import { Validator } from "./Validator";
declare abstract class NumberValidator extends Validator<number> {
}
declare class NumberMinValidator extends NumberValidator {
    constructor(min: number, exception?: Exception);
}
declare class NumberMaxValidator extends NumberValidator {
    constructor(max: number, exception?: Exception);
}
export { NumberValidator, NumberMinValidator, NumberMaxValidator };
