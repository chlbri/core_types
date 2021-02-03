"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFetchStatus = exports.isBad = exports.isGood = void 0;
const Fetch = {
    204: "MATCHED",
    200: "COMPLETED",
    300: "FAIL",
    404: "ERROR",
    500: "CONNECTIONFAILED",
};
function isGood(arg) {
    return arg < 205 && arg > 180;
}
exports.isGood = isGood;
function isFetchStatus(arg) {
    const inner = arg.toString();
    return Object.keys(Fetch).includes(inner);
}
exports.isFetchStatus = isFetchStatus;
function isBad(arg) {
    return arg > 205;
}
exports.isBad = isBad;
exports.default = Fetch;
