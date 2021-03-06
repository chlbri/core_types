"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValidator = void 0;
const functions_1 = require("../functions");
const validator_1 = require("./validator");
class RequiredValidator extends validator_1.Validator {
    constructor(exception) {
        super((value) => !functions_1.isNullish(value), exception);
    }
}
exports.RequiredValidator = RequiredValidator;
