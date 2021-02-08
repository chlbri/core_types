import { Exception } from "../exceptions";
import { Validator } from "./validator";
declare abstract class StringValidator extends Validator<string> {
}
declare class StringMinLengthValidator extends StringValidator {
    constructor(min: number, exception?: Exception);
}
declare class StringMaxLengthValidator extends StringValidator {
    constructor(max: number);
}
declare class StringExactLengthValidator extends StringValidator {
    constructor(exact: number);
}
declare class RequiredStringValidator<T> extends Validator<T> {
    constructor(value: T);
}
export { StringValidator, StringMinLengthValidator, StringExactLengthValidator, StringMaxLengthValidator, RequiredStringValidator, };
