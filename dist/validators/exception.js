"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXCEPTIONS = exports.Exception = void 0;
const status_1 = require("../status");
class Exception {
    constructor(status) {
        this.status = status;
    }
}
exports.Exception = Exception;
exports.EXCEPTIONS = status_1.EXCEPTION_CODES.reduce((acc, curr) => ({
    ...acc,
    [curr]: new Exception(curr),
}), {});
const ert = exports.EXCEPTIONS[434]; /* as Required<ExceptionObject> */
