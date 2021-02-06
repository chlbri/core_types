"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const exceptions_1 = require("../exceptions");
class Validator {
    constructor(validate, exception = exceptions_1.DEFAULT_EXCEPTION) {
        this.validate = validate;
        this.exception = exception;
    }
}
exports.Validator = Validator;
