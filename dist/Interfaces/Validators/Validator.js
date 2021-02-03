"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const Exceptions_1 = require("../Exceptions");
class Validator {
    constructor(validate, exception = Exceptions_1.DEFAULT_EXCEPTION) {
        this.validate = validate;
        this.exception = exception;
    }
}
exports.Validator = Validator;
