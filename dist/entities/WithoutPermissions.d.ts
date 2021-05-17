export declare type WithoutPermissions<T> = Omit<T, "_read" | "_update" | "_delete">;
export declare function isWithoutPermissions(val: any): val is WithoutPermissions<any>;
