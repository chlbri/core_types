import { Validator } from "./Validator";
declare abstract class StringValidator extends Validator<string> {
}
declare class StringMinLengthValidator extends StringValidator {
    constructor(min: number);
}
declare class StringMaxLengthValidator extends StringValidator {
    constructor(max: number);
}
export { StringValidator, StringMinLengthValidator, StringMaxLengthValidator, };
