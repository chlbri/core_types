import { PERMISSIONS_STRINGS } from '../Constants/strings';
import { OmitRecursive } from '../types';
export declare type PermissionStrings = typeof PERMISSIONS_STRINGS[number];
export declare type WithoutPermissions<T = any> = OmitRecursive<T, PermissionStrings>;
export declare function isWithoutPermissions(val: any): val is WithoutPermissions;
