import { SimpleObject } from "../interfaces";

export interface Entity {
  _id?: string;
  _read?: number;
  _update?: number;
  _delete?: number;
}

export function isEntity(val: any): val is Entity {
  return Object.keys(val).includes("_id");
}

export type SimpleEntity<T extends Entity> = {
  [K in Exclude<keyof T, "_id"> as SimpleObject<
    T[K]
  > extends never
    ? never
    : K]: SimpleObject<T[K]>;
};

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
