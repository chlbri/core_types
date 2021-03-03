import { AddString } from "./strings";

type IndexOfArray<
  T extends readonly unknown[],
  S extends number[] = []
> = T["length"] extends S["length"]
  ? S[number]
  : IndexOfArray<T, [S["length"], ...S]>;

type LenghtOf<T extends any[]> = T["length"];

// #region  TupleOf
type _TupleOf<
  T,
  N extends number,
  R extends unknown[] = []
> = R["length"] extends N ? R : _TupleOf<T, N, [...R, T]>;

type TupleOf<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N>
  : never;

type _UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type _LastOf<T> = _UnionToIntersection<
  T extends unknown ? () => T : never
> extends () => infer R
  ? R
  : never;

type _Push<T extends unknown[], V> = [...T, V];

type _TuplifyUnionBoolean<T> = [T] extends [never] ? true : false;

// TS4.1+
type TuplifyUnion<T> = true extends _TuplifyUnionBoolean<T>
  ? []
  : _Push<TuplifyUnion<Exclude<T, _LastOf<T>>>, _LastOf<T>>;

// #endregion

type Reverse<T> = T extends []
  ? T
  : T extends [infer Head, ...infer Tail]
  ? [...Reverse<Tail>, Head]
  : T;

type Expected<N extends number = 4> = TupleOf<boolean, N>;

export {
  IndexOfArray,
  TupleOf,
  Reverse,
  AddString,
  TuplifyUnion,
  Expected,
  LenghtOf,
};
