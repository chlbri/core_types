import { Nullish } from '../types';
import { Exception } from './exception';
import { Condition, Validator } from './validator';
export declare class StringValidator extends Validator<string> {
    constructor(validate: Condition<string>, exception?: Exception);
}
export declare class StringMinLengthValidator extends StringValidator {
    constructor(min: number, exception?: Exception);
}
export declare class StringExactLengthValidator extends StringValidator {
    constructor(exact: number, exception?: Exception);
}
export declare class StringMaxLengthValidator extends StringValidator {
    constructor(max: number, exception?: Exception);
}
export declare class StringRequiredValidator extends Validator {
    constructor(exception?: Exception);
}
export declare class FormatedNumberValidator extends StringValidator {
    constructor(num?: Nullish<number>, exception?: Exception);
}
