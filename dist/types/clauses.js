"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSearchOperation = void 0;
const ande = {
    $and: [{ $and: [], $cts: '3' }],
};
// #endregion
function isSearchOperation(val) {
    return Object.keys(val).every((val) => val.startsWith('$'));
}
exports.isSearchOperation = isSearchOperation;
