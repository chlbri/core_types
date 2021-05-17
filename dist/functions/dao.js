"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultDeletePermission = exports.addDefaultUpdatePermission = exports.addDefaultReadPermission = exports.addDefaultPermissions = exports.checkPermissions = void 0;
function checkPermissions(actor, permissions) {
    for (const iterator of permissions) {
        if (!actor.permissions.includes(iterator)) {
            return false;
        }
    }
    return true;
}
exports.checkPermissions = checkPermissions;
function addDefaultPermissions(value, defaultPermissions) {
    addDefaultReadPermission(value, defaultPermissions.read);
    addDefaultUpdatePermission(value, defaultPermissions.update);
    addDefaultDeletePermission(value, defaultPermissions.delete);
}
exports.addDefaultPermissions = addDefaultPermissions;
function addDefaultReadPermission(value, defaultRead) {
    if (!value._read) {
        value._read = defaultRead;
    }
}
exports.addDefaultReadPermission = addDefaultReadPermission;
function addDefaultUpdatePermission(value, defaultUpdate) {
    if (!value._update) {
        value._update = defaultUpdate;
    }
}
exports.addDefaultUpdatePermission = addDefaultUpdatePermission;
function addDefaultDeletePermission(value, defaultDelete) {
    if (!value._delete) {
        value._read = defaultDelete;
    }
}
exports.addDefaultDeletePermission = addDefaultDeletePermission;
