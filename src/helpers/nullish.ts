type Nullish<T = never> = T | null | undefined;
type NullishString = Nullish<string>;
type NullishNumber = Nullish<number>;
type NullishBoolean = Nullish<boolean>;
type NullishDate = Nullish<Date>;

export {
  Nullish,
  NullishString,
  NullishNumber,
  NullishBoolean,
  NullishDate,
};
