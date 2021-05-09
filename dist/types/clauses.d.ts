import { TupleOf } from "./arrays";
export declare type Equals = {
    $eq: any;
};
export declare type NotEquals = {
    $ne: any;
};
export declare type ObjectIn<T = any> = {
    $in: T[];
};
export declare type ObjectNotIn<T = any> = {
    $nin: T[];
};
export declare type GreaterThan = {
    $gt: number;
};
export declare type GreaterThanOrEquals = {
    $gte: number;
};
export declare type LessThan = {
    $lt: number;
};
export declare type LessThanOrEquals = {
    $lte: number;
};
export declare type Modulo = {
    $mod: number;
};
export declare type StringContains = {
    $cts: string;
};
export declare type StartsWith = {
    $sw: string;
};
export declare type EndsWith = {
    $ew: string;
};
export declare type Language = "da" | "du" | "en" | "fi" | "fr" | "de" | "hu" | "it" | "nb" | "pt" | "ro" | "ru" | "es" | "sv" | "tr";
export declare type RegEx = {
    $regex: string | RegExp;
};
export declare type Text = {
    $text: string | RegExp;
};
export declare type TypeAliases = "double" | "string" | "object" | "array" | "binData" | "objectId" | "bool";
export declare type All<T extends any[] = any[]> = {
    $all: T extends any[] ? T[number] : never;
};
export declare type ElementMatch<T extends any[] = any[]> = {
    $em: T extends any[] ? VSO<T[number]> | T[number] : never;
};
export declare type Size<T extends any[] = any[]> = {
    $size: T extends any[] ? number : never;
};
export declare type ArrayClauses<T = any[]> = T extends any[] ? All<T> | ElementMatch<T> | Size<T> : {};
export declare type ExistsProp = {
    $exists: true;
};
export declare type NotExistsProp = {
    $exists: false;
};
declare type VSOAny<T = any> = Equals & NotEquals & ObjectIn<T> & ObjectNotIn<T>;
declare type VSONumber = VSOAny<number> & GreaterThan & GreaterThanOrEquals & LessThan & LessThanOrEquals & Modulo;
declare type VSOString = VSOAny<string> & StringContains & StartsWith & EndsWith;
export declare type ValueSearchOperations<T = string> = T extends number ? VSONumber : T extends string ? VSOString : VSOAny<T>;
declare type VSO<T = any> = ValueSearchOperations<T>;
declare type LogH<T> = Partial<VSO<T> | LogicalClauses<T> | T>;
export declare type And<T = string> = {
    $and: LogH<T>[];
};
export declare type Not<T = string> = {
    $not: LogH<T>;
};
export declare type Nor<T = string> = {
    $nor: LogH<T>[];
};
export declare type Or<T = string> = {
    $or: LogH<T>[];
};
export declare type LogicalClauses<T = string> = And<T> | Not<T> | Nor<T> | Or<T>;
export declare type Slice = {
    $slice: number | TupleOf<number, 2>;
};
export declare function isSearchOperation(val: any): val is VSO;
export declare type SearchOperation<K> = Partial<(NotExistsProp | ExistsProp) & VSO<K> & LogicalClauses<K> & ArrayClauses<K>> | K;
export declare type DataSearchOperations<T> = {
    [key in keyof T]?: SearchOperation<T[key]>;
};
export {};
