"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response204 = exports.Response500 = exports.Response404 = exports.Response300 = exports.isBadResponse = exports.isGoodResponse = void 0;
const helpers_1 = require("../helpers");
function isGoodResponse(val) {
    return helpers_1.isGood(val.status);
}
exports.isGoodResponse = isGoodResponse;
function isBadResponse(val) {
    return helpers_1.isBad(val.status);
}
exports.isBadResponse = isBadResponse;
const Response500 = {
    status: 500,
};
exports.Response500 = Response500;
const Response300 = {
    status: 300,
};
exports.Response300 = Response300;
const Response404 = {
    status: 404,
};
exports.Response404 = Response404;
const Response204 = {
    status: 204,
    payload: undefined,
};
exports.Response204 = Response204;
