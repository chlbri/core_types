import { Exception } from "../exceptions";
import { Validator } from "./validator";
declare class StringValidator extends Validator<string> {
}
declare class StringMinLengthValidator extends StringValidator {
    constructor(min: number, exception?: Exception);
}
declare class StringMaxLengthValidator extends StringValidator {
    constructor(max: number, exception?: Exception);
}
declare class StringExactLengthValidator extends StringValidator {
    constructor(exact: number, exception?: Exception);
}
declare class RequiredStringValidator extends Validator {
    constructor(exception?: Exception);
}
declare class FormatedNumberValidator extends StringValidator {
    constructor(exact: number, exception?: Exception);
}
export { StringValidator, StringMinLengthValidator, StringExactLengthValidator, StringMaxLengthValidator, RequiredStringValidator, FormatedNumberValidator, };
