"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReturnData = exports.isError = exports.isTimeOutError = exports.isPermissionError = exports.isServerError = exports.isClientError = exports.hadPayload = exports.isRedirect = exports.isSuccessFull = exports.isInformation = void 0;
const status_1 = require("../status");
function isD(func, data) {
    return func(data.status);
}
// #region Had Payload
function isInformation(data) {
    return isD(status_1.isStatusInformation, data);
}
exports.isInformation = isInformation;
function isSuccessFull(data) {
    return isD(status_1.isStatusSuccessFull, data);
}
exports.isSuccessFull = isSuccessFull;
function isRedirect(data) {
    return isD(status_1.isStatusRedirect, data);
}
exports.isRedirect = isRedirect;
function hadPayload(data) {
    return isRedirect(data) || isSuccessFull(data) || isInformation(data);
}
exports.hadPayload = hadPayload;
// #endregion
// #region Errors
function isClientError(data) {
    return isD(status_1.isStatusClientError, data);
}
exports.isClientError = isClientError;
function isServerError(data) {
    return isD(status_1.isStatusServerError, data);
}
exports.isServerError = isServerError;
function isPermissionError(data) {
    return isD(status_1.isStatusPermission, data);
}
exports.isPermissionError = isPermissionError;
function isTimeOutError(data) {
    return isD(status_1.isTimeOutClientError, data);
}
exports.isTimeOutError = isTimeOutError;
function isError(data) {
    return isD(status_1.isStatusException, data);
}
exports.isError = isError;
// #endregion
function isReturnData(data) {
    return isD(status_1.isStatus, data);
}
exports.isReturnData = isReturnData;
