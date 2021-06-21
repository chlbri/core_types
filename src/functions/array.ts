import { TupleOf } from '../types';

export function isArray<T>(value: any): value is Array<T> {
  return value instanceof Array;
}

export function sliceArray<
  T extends readonly any[],
  N extends number,
>(array: T, splicer: N) {
  const arr = [...array];

  return new Array(Math.ceil(array.length / splicer))
    .fill(arr)
    .map((_) =>
      arr
        .splice(0, splicer)
        .map((val) => (isArray(val) ? val[0] : val)),
    ) as TupleOf<TupleOf<T[number], N>>;
}
