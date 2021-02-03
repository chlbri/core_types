"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCaseFromDomain = void 0;
function useCaseFromDomain(domain, useCase) {
    return domain[useCase].call;
}
exports.useCaseFromDomain = useCaseFromDomain;
