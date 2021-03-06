"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReturnData = exports.isServerError = exports.isClientError = exports.isRedirect = exports.isInformation = exports.isSuccessFull = void 0;
const status_1 = require("../status");
// #region functions
function isD(func, data) {
    return func(data.status);
}
function isSuccessFull(data) {
    return isD(status_1.isStatusSuccessFull, data);
}
exports.isSuccessFull = isSuccessFull;
const r3 = {
    status: 500,
};
function isInformation(data) {
    return isD(status_1.isStatusInformation, data);
}
exports.isInformation = isInformation;
function isRedirect(data) {
    return isD(status_1.isStatusRedirect, data);
}
exports.isRedirect = isRedirect;
function isClientError(data) {
    return isD(status_1.isStatusClientError, data);
}
exports.isClientError = isClientError;
function isServerError(data) {
    return isD(status_1.isStatusServerError, data);
}
exports.isServerError = isServerError;
function isReturnData(data) {
    return isD(status_1.isStatus, data);
}
exports.isReturnData = isReturnData;
// #endregion
