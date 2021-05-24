"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatusString = void 0;
const strings_1 = require("../../constants/strings");
const isS_1 = require("./isS");
function isStatusString(value) {
    return isS_1.isS(strings_1.STATUS_STRINGS, value);
}
exports.isStatusString = isStatusString;
