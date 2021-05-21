"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const validators_1 = require("../validators");
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
        return this.validate(this.value);
    }
    validate(arg) {
        if (!this.validators)
            return arg;
        for (const validator of this.validators) {
            if (!validator.validate(arg))
                return validator.exception;
        }
        return arg;
    }
    get isValid() {
        return !(this.safe instanceof validators_1.Exception);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
}
exports.ValueObject = ValueObject;
