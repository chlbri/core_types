"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceArray = exports.isArray = void 0;
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
function sliceArray(array, splicer) {
    const arr = [...array];
    return new Array(Math.ceil(array.length / splicer))
        .fill(arr)
        .map((_) => arr
        .splice(0, splicer)
        .map((val) => (isArray(val) ? val[0] : val)));
}
exports.sliceArray = sliceArray;
