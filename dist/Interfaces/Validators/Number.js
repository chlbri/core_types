"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMaxValidator = exports.NumberMinValidator = exports.NumberValidator = void 0;
const Validator_1 = require("./Validator");
class NumberValidator extends Validator_1.Validator {
}
exports.NumberValidator = NumberValidator;
class NumberMinValidator extends NumberValidator {
    constructor(min, exception) {
        super((value) => value > min, exception);
    }
}
exports.NumberMinValidator = NumberMinValidator;
class NumberMaxValidator extends NumberValidator {
    constructor(max, exception) {
        super((value) => value < max, exception);
    }
}
exports.NumberMaxValidator = NumberMaxValidator;
