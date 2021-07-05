"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = exports.isClean = void 0;
const types_1 = require("../../types");
function isClean(value) {
    let out = true;
    for (const iter of value) {
        if (!types_1.isStringLocalLitterals(iter)) {
            out = false;
            break;
        }
    }
    return out;
}
exports.isClean = isClean;
function clean(value) {
    let out = value;
    for (const iter of value) {
        if (!types_1.isStringLocalLitterals(iter)) {
            out = out.replace(iter, '');
        }
    }
    return out;
}
exports.clean = clean;
