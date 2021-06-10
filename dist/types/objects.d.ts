import { LengthOf, TuplifyUnion } from "./arrays";
import { AddString } from "./strings";
export declare type NExtract<T, U extends T> = Extract<T, U>;
export declare type NExclude<T, U extends T> = Exclude<T, U>;
export declare type NOmit<T, K extends keyof T> = Omit<T, K>;
export declare type PromisifyMethod<T> = T extends (...args: infer P) => infer R ? R extends Promise<any> ? T : (...args: P) => Promise<R> : never;
export declare type PromisifyObject<T extends object> = T & {
    [P in keyof T & string as PromisifyMethod<T[P]> extends never ? never : `${P}Async`]: PromisifyMethod<T[P]>;
};
declare type FilterFlags<Base, Condition> = {
    [Key in keyof Base]: Condition extends Base[Key] ? Key : never;
};
declare type NotFilterFlags<Base, Condition> = {
    [Key in keyof Base]: Condition extends Base[Key] ? never : Key;
};
declare type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
declare type NotAllowedNames<Base, Condition> = NotFilterFlags<Base, Condition>[keyof Base];
export declare type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
export declare type NotSubType<Base, Condition> = Pick<Base, NotAllowedNames<Base, Condition>>;
export declare type OnlyNamesOf<T, TProp> = {
    [K in keyof T]: Exclude<T[K], undefined> extends TProp ? K : never;
}[keyof T];
export declare type OnlyPropertiesOf<T, TProp> = Pick<T, OnlyNamesOf<T, TProp>>;
export declare type OnPropChangedMethods<T, I extends keyof T> = T & {
    [K in I & string as AddString<K, "", "Changed">]: (cb: (newValue: T[K]) => void) => void;
};
declare type _OmitWithoutPartial<T, O extends string> = {
    [key in keyof Omit<T, O>]: O extends keyof T[key] ? LengthOf<TuplifyUnion<keyof _OmitWithoutPartial<T[key], O>>> extends 1 ? _OmitWithoutPartial<T[key], O>[keyof _OmitWithoutPartial<T[key], O>] : _OmitWithoutPartial<T[key], O> : T[key];
};
declare type _OmitWithPartial<T, O extends string> = NotSubType<_OmitWithoutPartial<T, O>, undefined> & Partial<SubType<_OmitWithoutPartial<T, O>, undefined>>;
export declare type OmitRecursive<T, O extends string> = {
    [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<T[key], O>;
};
export {};
