"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringLocalLitterals = void 0;
const Constants_1 = require("../Constants");
function isStringLocalLitterals(val) {
    // #region Checkers
    const all = [
        ...Constants_1.STRINGS.LETTERS,
        ...Constants_1.STRINGS.LETTERS.map((val) => val.toUpperCase()),
        ...Constants_1.NUMBERS.DIGITS.map((val) => '' + val),
        ...Constants_1.NUMBERS.DIGITS,
    ];
    // #endregion
    return all.includes(val);
}
exports.isStringLocalLitterals = isStringLocalLitterals;
