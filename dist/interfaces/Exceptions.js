"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNKNOWN_EXCEPTION = exports.DEFAULT_EXCEPTION = void 0;
const numbers_1 = require("../constants/numbers");
const strings_1 = require("../constants/strings");
class Exception {
    constructor(statut, message) {
        this.statut = statut;
        this.message = message;
    }
}
exports.default = Exception;
const DEFAULT_EXCEPTION = new Exception(numbers_1.ERROR_CODE_DEFAULT, strings_1.EXCEPTION_MESSAGE_DEFAULT);
exports.DEFAULT_EXCEPTION = DEFAULT_EXCEPTION;
const UNKNOWN_EXCEPTION = new Exception(numbers_1.ERROR_UNKNOWN, strings_1.EXCEPTION_MESSAGE_UNKNOWN);
exports.UNKNOWN_EXCEPTION = UNKNOWN_EXCEPTION;
