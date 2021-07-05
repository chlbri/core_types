"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorHex2 = exports.colorHex1 = exports.rgba = void 0;
function rgba(red, green, blue, alpha) {
    return `rgba(${red},${green},${blue},${alpha})`;
}
exports.rgba = rgba;
function colorHex1(red, green, blue, alpha) {
    return `#${red}${green}${blue}${alpha !== null && alpha !== void 0 ? alpha : ''}`;
}
exports.colorHex1 = colorHex1;
function colorHex2(red, green, blue, alpha) {
    return `#${red}${green}${blue}${alpha !== null && alpha !== void 0 ? alpha : ''}`;
}
exports.colorHex2 = colorHex2;
