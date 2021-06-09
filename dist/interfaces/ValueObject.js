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
    recreate(value) {
        return new ValueObject(value, this.validators);
    }
    validateBoolean(arg) {
        const _arg = this.validate(arg);
        return !(_arg instanceof validators_1.Exception);
    }
    get isValid() {
        return this.validateBoolean(this.value);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
    unChain(next) {
        return this.isValid ? this : next;
    }
}
exports.ValueObject = ValueObject;
