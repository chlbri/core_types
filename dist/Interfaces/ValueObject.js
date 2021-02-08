"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
const exceptions_1 = require("./exceptions");
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
        }
        return this.value;
    }
    get isValid() {
        return !(this.safe instanceof exceptions_1.Exception);
    }
    chain(next) {
        return this.isValid ? next : this;
    }
}
exports.ValueObject = ValueObject;
