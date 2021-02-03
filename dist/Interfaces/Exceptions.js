"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = exports.UNKNOWN_EXCEPTION = exports.DEFAULT_EXCEPTION = void 0;
const Constants_1 = require("../Constants");
class Exception {
    constructor(statut, message) {
        this.statut = statut;
        this.message = message;
    }
}
exports.Exception = Exception;
const DEFAULT_EXCEPTION = new Exception(Constants_1.NUMBERS.ERROR_CODE_DEFAULT, Constants_1.STRINGS.EXCEPTION_MESSAGE_DEFAULT);
exports.DEFAULT_EXCEPTION = DEFAULT_EXCEPTION;
const UNKNOWN_EXCEPTION = new Exception(Constants_1.NUMBERS.ERROR_UNKNOWN, Constants_1.STRINGS.EXCEPTION_MESSAGE_UNKNOWN);
exports.UNKNOWN_EXCEPTION = UNKNOWN_EXCEPTION;
