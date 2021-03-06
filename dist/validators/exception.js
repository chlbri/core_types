"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXCEPTIONS = exports.Exception = void 0;
const status_1 = require("../status");
class Exception {
    constructor(statut) {
        this.statut = statut;
    }
}
exports.Exception = Exception;
exports.EXCEPTIONS = status_1.EXCEPTION_CODES.reduce((acc, curr) => ((acc[`${curr}`] = new Exception(curr)), acc), {});
