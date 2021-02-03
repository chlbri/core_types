"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Exceptions_1 = require("./Exceptions");
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
        return !(value instanceof Exceptions_1.Exception);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
}
exports.default = ValueObject;
function validate(value) {
    return !(value instanceof Exceptions_1.Exception);
}
