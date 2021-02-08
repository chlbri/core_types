"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredNumberValidator = exports.StringValueValidator = exports.NumberMaxValidator = exports.NumberMinValidator = exports.NumberValidator = void 0;
const validator_1 = require("./validator");
class NumberValidator extends validator_1.Validator {
}
exports.NumberValidator = NumberValidator;
class NumberMinValidator extends NumberValidator {
    constructor(min, exception) {
        super((value) => value > min, exception);
    }
}
exports.NumberMinValidator = NumberMinValidator;
class StringValueValidator extends NumberValidator {
    constructor(exact) {
        super((value) => value === exact);
    }
}
exports.StringValueValidator = StringValueValidator;
class NumberMaxValidator extends NumberValidator {
    constructor(max, exception) {
        super((value) => value < max, exception);
    }
}
exports.NumberMaxValidator = NumberMaxValidator;
class RequiredNumberValidator extends validator_1.Validator {
    constructor(value) {
        super((value) => typeof value === "number");
    }
}
exports.RequiredNumberValidator = RequiredNumberValidator;
