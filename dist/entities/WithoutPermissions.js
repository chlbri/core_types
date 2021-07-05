"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithoutPermissions = void 0;
const strings_1 = require("../Constants/strings");
//TODO: Add a better way to exit with false
function isWithoutPermissions(val) {
    return Object.keys(val).every((val) => !strings_1.PERMISSIONS_STRINGS.includes(val));
}
exports.isWithoutPermissions = isWithoutPermissions;
