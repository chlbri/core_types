"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceArray = exports.isArray = void 0;
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
function sliceArray(array, splicer) {
    return [
        ...new Array(Math.ceil(array.length / splicer)).map((_) => array
            .splice(0, splicer)
            .map((val) => (isArray(val) ? val[0] : val))),
    ];
}
exports.sliceArray = sliceArray;
