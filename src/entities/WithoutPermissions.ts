import { PERMISSIONS_STRINGS } from '../Constants/strings';
import { OmitRecursive } from '../types';

export type PermissionStrings =
  typeof PERMISSIONS_STRINGS[number];

export type WithoutPermissions<T = any> = OmitRecursive<
  T,
  PermissionStrings
>;

//TODO: Add a better way to exit with false
export function isWithoutPermissions(
  val: any,
): val is WithoutPermissions {
  return Object.keys(val).every(
    (val) =>
      !(PERMISSIONS_STRINGS as readonly string[]).includes(val),
  );
}
