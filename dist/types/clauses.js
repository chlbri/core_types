"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSearchOperation = void 0;
const ande = {
    $and: [{ $and: [], $cts: "3" }],
};
// #endregion
function isSearchOperation(val) {
    return Object.keys(val).every((val) => val.startsWith("$"));
}
exports.isSearchOperation = isSearchOperation;
const v3 = {
    age: {
        $lte: 4,
        $and: [1, 3, { $gt: 3 }],
        $not: { $mod: 3 },
    },
    name: "3",
};
const v1 = { $exists: false };
