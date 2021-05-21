"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatedNumberValidator = exports.StringRequiredValidator = exports.StringMaxLengthValidator = exports.StringExactLengthValidator = exports.StringMinLengthValidator = exports.StringValidator = void 0;
const nullish_1 = require("../functions/nullish");
const validator_1 = require("./validator");
class StringValidator extends validator_1.Validator {
    constructor(validate, exception) {
        super((value) => !nullish_1.isNullish(value) && validate(value), exception);
    }
}
exports.StringValidator = StringValidator;
class StringMinLengthValidator extends StringValidator {
    constructor(min, exception) {
        super((value) => value.length >= min, exception);
    }
}
exports.StringMinLengthValidator = StringMinLengthValidator;
class StringExactLengthValidator extends StringValidator {
    constructor(exact, exception) {
        super((value) => value.length === exact, exception);
    }
}
exports.StringExactLengthValidator = StringExactLengthValidator;
class StringMaxLengthValidator extends StringValidator {
    constructor(max, exception) {
        super((value) => value.length <= max, exception);
    }
}
exports.StringMaxLengthValidator = StringMaxLengthValidator;
class StringRequiredValidator extends validator_1.Validator {
    constructor(exception) {
        super((value) => typeof value === "string", exception);
    }
}
exports.StringRequiredValidator = StringRequiredValidator;
class FormatedNumberValidator extends StringValidator {
    constructor(num, exception) {
        super((value) => {
            const reg = new RegExp(`^\\d${nullish_1.isNullish(num) ? "+" : `{${num}}`}$`);
            return reg.test(value);
        }, exception);
    }
}
exports.FormatedNumberValidator = FormatedNumberValidator;
