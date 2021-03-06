import { AddString } from "./strings";
export declare type NExtract<T, U extends T> = Extract<T, U>;
export declare type NExclude<T, U extends T> = Exclude<T, U>;
export declare type NOmit<T, K extends keyof T> = Omit<T, K>;
export declare type PromisifyMethod<T> = T extends (...args: infer P) => infer R ? R extends Promise<any> ? T : (...args: P) => Promise<R> : never;
export declare type PromisifyObject<T extends object> = T & {
    [P in keyof T & string as PromisifyMethod<T[P]> extends never ? never : `${P}Async`]: PromisifyMethod<T[P]>;
};
export declare type WithoutPassword<T> = Omit<T, "password">;
export declare type OnlyNamesOf<T, TProp> = {
    [K in keyof T]: Exclude<T[K], undefined> extends TProp ? K : never;
}[keyof T];
export declare type OnlyPropertiesOf<T, TProp> = Pick<T, OnlyNamesOf<T, TProp>>;
export declare type OnPropChangedMethods<T, I extends keyof T> = T & {
    [K in I & string as AddString<K, "", "Changed">]: (cb: (newValue: T[K]) => void) => void;
};
