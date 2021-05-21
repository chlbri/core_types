export function isArray<T>(value: any): value is Array<T> {
  return value instanceof Array;
}

export function sliceArray<
  T extends any[],
  N extends number
>(array: T, splicer: N) {
  return [
    ...new Array(Math.ceil(array.length / splicer))
      .fill(array)
      .map((_) =>
        array
          .splice(0, splicer)
          .map((val) => (isArray(val) ? val[0] : val))
      ),
  ] as const;
}
