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
export declare type ArrayIn<T = any> = {
    op: "$in";
    search: T[];
};
export declare type ArrayNotIn<T = any> = {
    op: "$nin";
    search: T[];
};
export declare type StartsWith = {
    op: "startsWith";
    search: string;
};
export declare type EndsWith = {
    op: "endsWith";
    endsWith: string;
};
export declare type ValueSearchOperations<T = string | number> = T extends number ? Equals | GreaterThan | GreaterThanOrEquals | LessThan | LessThanOrEquals | ArrayIn | ArrayNotIn : T extends string ? Equals | StringContains | ArrayIn | ArrayNotIn | StartsWith | EndsWith : Equals | ArrayIn | ArrayNotIn;
export declare function isSearchOperation(val: any): val is ValueSearchOperations;
export declare type DataSearchOperations<T> = {
    [key in keyof T]?: ValueSearchOperations<T[key]> | T[key];
};
