import { Validator } from "./Validator";
declare abstract class NumberValidator extends Validator<number> {
}
declare class NumberMinValidator extends NumberValidator {
    constructor(min: number);
}
declare class NumberMaxValidator extends NumberValidator {
    constructor(max: number);
}
declare class NumberMinMaxValidator extends NumberValidator {
    constructor(min: number, max: number);
}
export { NumberValidator, NumberMinValidator, NumberMaxValidator, NumberMinMaxValidator, };
