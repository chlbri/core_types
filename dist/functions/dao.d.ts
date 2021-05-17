import { Actor, Entity } from "../entities";
import { PermissionsDAO } from "../interfaces";
import { NOmit } from "../types";
export declare function checkPermissions(actor: Actor, permissions: number[]): boolean;
export declare function addDefaultPermissions<T>(value: T, defaultPermissions: NOmit<PermissionsDAO, "create">): void;
export declare function addDefaultReadPermission<T extends Entity>(value: T, defaultRead: number): void;
export declare function addDefaultUpdatePermission<T extends Entity>(value: T, defaultUpdate: number): void;
export declare function addDefaultDeletePermission<T extends Entity>(value: T, defaultDelete: number): void;
