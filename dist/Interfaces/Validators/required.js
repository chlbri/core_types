"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValidato = void 0;
const validator_1 = require("./validator");
class RequiredValidato extends validator_1.Validator {
    constructor() {
        super((value) => value !== undefined && value !== null);
    }
}
exports.RequiredValidato = RequiredValidato;
