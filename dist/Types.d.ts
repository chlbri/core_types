declare type IndexOfArray<T extends readonly unknown[], S extends number[] = []> = T["length"] extends S["length"] ? S[number] : IndexOfArray<T, [S["length"], ...S]>;
declare type Awaited<T> = T extends null | undefined ? T : T extends PromiseLike<infer U> ? Awaited<U> : T;
declare type _TupleOf<T, N extends number, R extends unknown[] = []> = R["length"] extends N ? R : _TupleOf<T, N, [...R, T]>;
declare type TupleOf<T, N extends number> = N extends N ? 0 extends N ? T : 1 extends N ? T : number extends N ? T[] : _TupleOf<T, N> : never;
declare type Reverse<T> = T extends [] ? T : T extends [infer Head, ...infer Tail] ? [...Reverse<Tail>, Head] : T;
declare type AddString<T, Before extends string = "", After extends string = ""> = `${Before}${T & string}${After}`;
declare type _UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare type _LastOf<T> = _UnionToIntersection<T extends unknown ? () => T : never> extends () => infer R ? R : never;
declare type _Push<T extends unknown[], V> = [...T, V];
declare type _TuplifyUnionBoolean<T> = [T] extends [never] ? true : false;
declare type TuplifyUnion<T> = true extends _TuplifyUnionBoolean<T> ? [] : _Push<TuplifyUnion<Exclude<T, _LastOf<T>>>, _LastOf<T>>;
declare type _SetEntityForDatabase<T, K extends keyof T, Before extends string = "", After extends string = ""> = {
    [key in T[K] as AddString<key, Before, After>]: T[];
};
declare type _SetEntityForUseCase<T, K extends keyof T, Before extends string = "", After extends string = ""> = {
    [key in T[K] as AddString<key, Before, After>]: T;
};
declare type _ReadonlyArrayUnknown = ReadonlyArray<unknown>;
declare type CoreDataBaseSchema<T extends _ReadonlyArrayUnknown, K extends keyof T[number], Before extends string = "", After extends string = "s"> = T extends [infer T1, ...infer U1] ? U1[0] extends undefined ? _SetEntityForDatabase<T1, K, Before, After> : U1 extends _ReadonlyArrayUnknown ? _SetEntityForDatabase<T1, K, Before, After> & CoreDataBaseSchema<U1, K, Before, After> : never : never;
declare type DomainUseCaseSchema<T extends _ReadonlyArrayUnknown, K extends keyof T[number], Before extends string = "", After extends string = ""> = T extends [infer T1, ...infer U1] ? U1[0] extends undefined ? _SetEntityForUseCase<T1, K, Before, After> : U1 extends _ReadonlyArrayUnknown ? _SetEntityForUseCase<T1, K, Before, After> & DomainUseCaseSchema<U1, K, Before, After> : never : {
    [key: string]: T[number];
};
declare type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
declare type UnionType<T, U> = U extends T ? U : never;
declare type UnionString<T> = UnionType<string, T>;
declare type OnPropChangedMethods<T, I extends keyof T> = T & {
    [K in I & string as AddString<K, "", "Changed">]: (cb: (newValue: T[K]) => void) => void;
};
declare type PromisifyMethod<T> = T extends (...args: infer P) => infer R ? R extends Promise<unknown> ? T : (...args: P) => Promise<R> : never;
declare type PromisifyObject<T extends object, K extends keyof T> = T & {
    [P in K & string as PromisifyMethod<T[P]> extends never ? never : `${P}Async`]: PromisifyMethod<T[P]>;
};
declare type CoreTypes = string | boolean | number | bigint | undefined | null;
export { IndexOfArray, Awaited, TupleOf, Reverse, AddString, TuplifyUnion, UnionType, UnionString, CoreDataBaseSchema, DomainUseCaseSchema, Digit, OnPropChangedMethods, PromisifyMethod, PromisifyObject, CoreTypes, };
