"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Exceptions_1 = require("../Exceptions");
class Validator {
    constructor(validate, exception = Exceptions_1.DEFAULT_EXCEPTION) {
        this.validate = validate;
        this.exception = exception;
    }
}
exports.default = Validator;
