"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStatus = exports.STATUS_CODES = exports.EXCEPTION_CODES = void 0;
const client_1 = require("./client");
const information_1 = require("./information");
const redirect_1 = require("./redirect");
const server_1 = require("./server");
const successfull_1 = require("./successfull");
const _1 = require("./_");
exports.EXCEPTION_CODES = [
    ...redirect_1.REDIRECT_STATUS,
    ...client_1.CLIENT_ERROR_STATUS,
    ...server_1.SERVER_ERROR_STATUS,
];
exports.STATUS_CODES = [
    ...successfull_1.SUCCESSFULL_STATUS,
    ...information_1.INFORMATION_STATUS,
    ...exports.EXCEPTION_CODES,
];
function isStatus(val) {
    return _1.isN(exports.STATUS_CODES, val);
}
exports.isStatus = isStatus;
__exportStar(require("./client"), exports);
__exportStar(require("./information"), exports);
__exportStar(require("./redirect"), exports);
__exportStar(require("./server"), exports);
__exportStar(require("./successfull"), exports);
