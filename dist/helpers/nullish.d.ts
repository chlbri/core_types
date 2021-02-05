declare type Nullish<T = never> = T | null | undefined;
declare type NullishString = Nullish<string>;
declare type NullishNumber = Nullish<number>;
declare type NullishBoolean = Nullish<boolean>;
declare type NullishDate = Nullish<Date>;
export { Nullish, NullishString, NullishNumber, NullishBoolean, NullishDate, };
