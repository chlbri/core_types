export declare type Equals = {
    op: "equals";
    search: any;
};
export declare type GreaterThan = {
    op: "greaterThan";
    search: number;
};
export declare type LessThan = {
    op: "lessThan";
    search: number;
};
export declare type StringContains = {
    op: "contains";
    search: string;
};
export declare type ArrayFilter = {
    op: "filter";
    search: any[];
};
export declare type StartsWith = {
    op: "startsWith";
    search: string;
};
export declare type EndsWith = {
    op: "endsWith";
    search: string;
};
export declare type DataSearchOperations<T> = Equals | GreaterThan | LessThan | StringContains | ArrayFilter | StartsWith | EndsWith | T;
