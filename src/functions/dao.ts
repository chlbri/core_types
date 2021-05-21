import { Actor, Entity } from "../entities";
import { PermissionsDAO } from "../interfaces";
import { NOmit } from "../types";

export function checkPermissions(
  actor: Actor,
  permissions: number[]
) {
  for (const iterator of permissions) {
    if (!actor.permissions.includes(iterator)) {
      return false;
    }
  }
  return true;
}

export function addDefaultPermissions<T>(
  value: T,
  defaultPermissions: NOmit<PermissionsDAO, "create">
) {
  addDefaultReadPermission(value, defaultPermissions.read);
  addDefaultUpdatePermission(
    value,
    defaultPermissions.update
  );
  addDefaultDeletePermission(
    value,
    defaultPermissions.delete
  );
}

export function addDefaultReadPermission<T extends Entity>(
  value: T,
  defaultRead: number
) {
  if (!value._read) {
    value._read = defaultRead;
  }
}

export function addDefaultUpdatePermission<
  T extends Entity
>(value: T, defaultUpdate: number) {
  if (!value._update) {
    value._update = defaultUpdate;
  }
}

export function addDefaultDeletePermission<
  T extends Entity
>(value: T, defaultDelete: number) {
  if (!value._delete) {
    value._read = defaultDelete;
  }
}
