import { WithoutId } from "../entities";
export declare type Equals = {
    op: "$eq";
    search: any;
};
export declare type NotEquals = {
    op: "$ne";
    search: any;
};
export declare type GreaterThan = {
    op: "$gt";
    search: number;
};
export declare type GreaterThanOrEquals = {
    op: "$gte";
    search: number;
};
export declare type LessThan = {
    op: "$lt";
    search: number;
};
export declare type LessThanOrEquals = {
    op: "$lte";
    search: number;
};
export declare type StringContains = {
    op: "contains";
    search: string;
};
export declare type ArrayIn = {
    op: "$in";
    search: any[];
};
export declare type ArrayNotIn = {
    op: "$nin";
    search: any[];
};
export declare type StartsWith = {
    op: "startsWith";
    search: string;
};
export declare type EndsWith = {
    op: "endsWith";
    endsWith: string;
};
declare type _DataSearchOperations<T> = Equals | GreaterThan | GreaterThanOrEquals | LessThan | LessThanOrEquals | StringContains | ArrayIn | ArrayNotIn | StartsWith | EndsWith | WithoutId<T>;
export declare type DataSearchOperations<T> = {
    [key in keyof T]?: _DataSearchOperations<T[key]>;
};
export {};
