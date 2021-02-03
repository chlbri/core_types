"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMinMaxLengthValidator = exports.StringMaxLengthValidator = exports.StringMinLengthValidator = void 0;
const Validator_1 = __importDefault(require("./Validator"));
class StringValidator extends Validator_1.default {
}
class StringMinLengthValidator extends StringValidator {
    constructor(min) {
        super((value) => value.length > min);
    }
}
exports.StringMinLengthValidator = StringMinLengthValidator;
class StringMaxLengthValidator extends StringValidator {
    constructor(max) {
        super((value) => value.length < max);
    }
}
exports.StringMaxLengthValidator = StringMaxLengthValidator;
class StringMinMaxLengthValidator extends StringValidator {
    constructor(min, max) {
        super((value) => value.length > min && value.length < max);
    }
}
exports.StringMinMaxLengthValidator = StringMinMaxLengthValidator;
