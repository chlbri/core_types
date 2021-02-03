"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exceptions_1 = __importStar(require("./Exceptions"));
class ValueObject {
    constructor(value, validators) {
        this.value = value;
        this.validators = validators;
        this.chain = this.chain.bind(this);
    }
    get unSafe() {
        return this.value;
    }
    get safe() {
        for (const validator of this.validators) {
            if (!validator.validate(this.value))
                return validator.exception;
            return this.value;
        }
        return Exceptions_1.UNKNOWN_EXCEPTION;
    }
    get isValid() {
        return ValueObject.validate(this.value);
    }
    static validate(value) {
        return !(value instanceof Exceptions_1.default);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
}
exports.default = ValueObject;
function validate(value) {
    return !(value instanceof Exceptions_1.default);
}
