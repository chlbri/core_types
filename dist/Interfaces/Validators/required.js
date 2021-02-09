"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValidator = void 0;
const validator_1 = require("./validator");
class RequiredValidator extends validator_1.Validator {
    constructor() {
        super((value) => value !== undefined && value !== null);
    }
}
exports.RequiredValidator = RequiredValidator;
