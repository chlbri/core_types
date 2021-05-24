import { TupleOf } from "../types";
export declare function isArray<T>(value: any): value is Array<T>;
export declare function sliceArray<T extends readonly any[], N extends number>(array: T, splicer: N): TupleOf<T[number], N>[];
