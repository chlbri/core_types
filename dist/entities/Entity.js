"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntity = void 0;
function isEntity(val) {
    return Object.keys(val).includes('_id');
}
exports.isEntity = isEntity;
/*

  addDefaultPermissions(value: T) {
    (["Read", "Update", "Delete"] as const).forEach((val) => {
      this[`addDefault${val}Permission` as const](value);
    });
  }

  addDefaultReadPermission(value: T) {
    if (!value._read) {
      value._read = this.permissions.read;
    }
  }

  addDefaultUpdatePermission(value: T) {
    if (!value._update) {
      value._update = this.permissions.update;
    }
  }

  addDefaultDeletePermission(value: T) {
    if (!value._delete) {
      value._read = this.permissions.delete;
    }
  }
*/
