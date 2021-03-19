"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringLocalLitterals = void 0;
const constants_1 = require("../constants");
function isStringLocalLitterals(val) {
    // #region Checkers
    const all = [
        ...constants_1.STRINGS.LETTERS,
        ...constants_1.STRINGS.LETTERS.map((val) => val.toUpperCase()),
        ...constants_1.NUMBERS.DIGITS.map((val) => "" + val),
        ...constants_1.NUMBERS.DIGITS,
    ];
    // #endregion
    return all.includes(val);
}
exports.isStringLocalLitterals = isStringLocalLitterals;
