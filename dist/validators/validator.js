"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const exception_1 = require("./exception");
class Validator {
    constructor(validate, exception = new exception_1.Exception(404)) {
        this.validate = validate;
        this.exception = exception;
    }
}
exports.Validator = Validator;
