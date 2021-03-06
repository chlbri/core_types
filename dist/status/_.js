"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isN = void 0;
function isN(DATA, check) {
    const _arg = Math.ceil(check);
    return DATA.includes(_arg);
}
exports.isN = isN;
