"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithoutPermissions = void 0;
function isWithoutPermissions(val) {
    return Object.keys(val).every((val) => !["_read", "_update", "_delete"].includes(val));
}
exports.isWithoutPermissions = isWithoutPermissions;
