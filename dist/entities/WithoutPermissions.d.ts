import { PERMISSIONS_STRINGS } from "../constants/strings";
import { OmitRecursive } from "../types";
export declare type PermissionStrings = typeof PERMISSIONS_STRINGS[number];
export declare type WithoutPermissions<T> = OmitRecursive<T, PermissionStrings>;
export declare function isWithoutPermissions(val: any): val is WithoutPermissions<any>;
