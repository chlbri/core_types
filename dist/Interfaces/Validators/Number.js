"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMinMaxValidator = exports.NumberMaxValidator = exports.NumberMinValidator = exports.NumberValidator = void 0;
const Validator_1 = require("./Validator");
class NumberValidator extends Validator_1.Validator {
}
exports.NumberValidator = NumberValidator;
class NumberMinValidator extends NumberValidator {
    constructor(min) {
        super((value) => value > min);
    }
}
exports.NumberMinValidator = NumberMinValidator;
class NumberMaxValidator extends NumberValidator {
    constructor(max) {
        super((value) => value < max);
    }
}
exports.NumberMaxValidator = NumberMaxValidator;
class NumberMinMaxValidator extends NumberValidator {
    constructor(min, max) {
        super((value) => value > min && value < max);
    }
}
exports.NumberMinMaxValidator = NumberMinMaxValidator;
