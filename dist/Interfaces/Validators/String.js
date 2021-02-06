"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMaxLengthValidator = exports.StringMinLengthValidator = exports.StringValidator = void 0;
const Validator_1 = require("./Validator");
class StringValidator extends Validator_1.Validator {
}
exports.StringValidator = StringValidator;
class StringMinLengthValidator extends StringValidator {
    constructor(min, exception) {
        super((value) => value.length > min);
    }
}
exports.StringMinLengthValidator = StringMinLengthValidator;
class StringMaxLengthValidator extends StringValidator {
    constructor(max) {
        super((value) => value.length < max);
    }
}
exports.StringMaxLengthValidator = StringMaxLengthValidator;
