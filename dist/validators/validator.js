"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const exception_1 = require("./exception");
class Validator {
    constructor(validate, exception = exception_1.EXCEPTIONS[404]) {
        this.validate = validate;
        this.exception = exception;
    }
    chain(validator, exception = exception_1.EXCEPTIONS[404]) {
        const out = new Validator((arg) => this.validate(arg) && validator.validate(arg), exception);
        return out;
    }
}
exports.Validator = Validator;
