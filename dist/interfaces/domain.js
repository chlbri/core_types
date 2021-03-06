"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCase = void 0;
function useCase(domain, use) {
    return domain[use].call;
}
exports.useCase = useCase;
