"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatedNumberValidator = exports.RequiredStringValidator = exports.StringMaxLengthValidator = exports.StringExactLengthValidator = exports.StringMinLengthValidator = exports.StringValidator = void 0;
const validator_1 = require("./validator");
class StringValidator extends validator_1.Validator {
}
exports.StringValidator = StringValidator;
class StringMinLengthValidator extends StringValidator {
    constructor(min, exception) {
        super((value) => value.length >= min, exception);
    }
}
exports.StringMinLengthValidator = StringMinLengthValidator;
class StringMaxLengthValidator extends StringValidator {
    constructor(max, exception) {
        super((value) => value.length <= max, exception);
    }
}
exports.StringMaxLengthValidator = StringMaxLengthValidator;
class StringExactLengthValidator extends StringValidator {
    constructor(exact, exception) {
        super((value) => value.length === exact, exception);
    }
}
exports.StringExactLengthValidator = StringExactLengthValidator;
class RequiredStringValidator extends validator_1.Validator {
    constructor(exception) {
        super((value) => typeof value === "string", exception);
    }
}
exports.RequiredStringValidator = RequiredStringValidator;
class FormatedNumberValidator extends StringValidator {
    constructor(exact, exception) {
        super((value) => {
            const reg = new RegExp(`\\d{${exact}}`);
            return reg.test(value);
        }, exception);
    }
}
exports.FormatedNumberValidator = FormatedNumberValidator;
