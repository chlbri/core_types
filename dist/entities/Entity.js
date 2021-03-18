"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntity = void 0;
function isEntity(val) {
    return Object.keys(val).includes("_id");
}
exports.isEntity = isEntity;
