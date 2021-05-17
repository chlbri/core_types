"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDAOL = void 0;
class IDAOL {
    constructor(actor, permissions, dao, logger) {
        this.actor = actor;
        this.permissions = permissions;
        this.dao = dao;
        this.logger = logger;
    }
    createOne({ actor, value }) {
        let data = { status: 301 };
    }
}
exports.IDAOL = IDAOL;
