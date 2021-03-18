"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSearchOperation = void 0;
function isSearchOperation(val) {
    return Object.keys(val).includes("op");
}
exports.isSearchOperation = isSearchOperation;
