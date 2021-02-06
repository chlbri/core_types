type IndexOfArray<
  T extends readonly unknown[],
  S extends number[] = []
> = T["length"] extends S["length"]
  ? S[number]
  : IndexOfArray<T, [S["length"], ...S]>;

type Awaited<T> = T extends null | undefined
  ? T
  : T extends PromiseLike<infer U>
  ? Awaited<U>
  : T;

/* #region  TupleOf */
type _TupleOf<
  T,
  N extends number,
  R extends unknown[] = []
> = R["length"] extends N ? R : _TupleOf<T, N, [...R, T]>;

type TupleOf<T, N extends number> = N extends N
  ? 0 extends N
    ? T
    : 1 extends N
    ? T
    : number extends N
    ? T[]
    : _TupleOf<T, N>
  : never;
/* #endregion */

type Reverse<T> = T extends []
  ? T
  : T extends [infer Head, ...infer Tail]
  ? [...Reverse<Tail>, Head]
  : T;

type AddString<
  T,
  Before extends string = "",
  After extends string = ""
> = `${Before}${T & string}${After}`;

/* #region  TuplifyUnion */
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

/* #endregion */

type _SetEntityForDatabase<
  T,
  K extends keyof T,
  Before extends string = "",
  After extends string = ""
> = {
  [key in T[K] as AddString<key, Before, After>]: T[];
};

type _SetEntityForUseCase<
  T,
  K extends keyof T,
  Before extends string = "",
  After extends string = ""
> = {
  [key in T[K] as AddString<key, Before, After>]: T;
};

type _ReadonlyArrayUnknown = ReadonlyArray<unknown>;

type CoreDataBaseSchema<
  T extends _ReadonlyArrayUnknown,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = "s"
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForDatabase<T1, K, Before, After>
    : U1 extends _ReadonlyArrayUnknown
    ? _SetEntityForDatabase<T1, K, Before, After> &
        CoreDataBaseSchema<U1, K, Before, After>
    : never
  : never;


type DataBaseOrUseCase<
T,
K extends keyof T,
Before extends string = "",
After extends string = ""
> = _SetEntityForUseCase<T,K,Before,After> | _SetEntityForDatabase<T,K,Before,After>;




type DomainUseCaseSchema<
  T extends _ReadonlyArrayUnknown,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = ""
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForUseCase<T1, K, Before, After>
    : U1 extends _ReadonlyArrayUnknown
    ? _SetEntityForUseCase<T1, K, Before, After> &
        DomainUseCaseSchema<U1, K, Before, After>
    : never
  : {
      [key: string]: T[number];
    };

type StringDashSTring = `${string}-${string}`;

type _JoinStringHelper = string | number | boolean | bigint;

type JoinString<
  T extends readonly unknown[],
  sep extends string = " "
> = T extends []
  ? ""
  : T extends [_JoinStringHelper]
  ? `${T[0]}`
  : T extends [_JoinStringHelper, ...infer U]
  ? `${T[0]}${sep}${JoinString<U, sep>}`
  : string;

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**  Exemple de String interpolation*/
type FourDigits = `${Digit}${Digit}${Digit}${Digit}`;

type UnionType<T, U> = U extends T ? U : never;

type UnionString<T> = UnionType<string, T>;

type OnPropChangedMethods<T, I extends keyof T> = T &
  {
    [K in I & string as AddString<K, "", "Changed">]: (
      cb: (newValue: T[K]) => void
    ) => void;
  };

//** T must be an regular Function  */
type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<unknown>
    ? T
    : (...args: P) => Promise<R>
  : never;

type PromisifyObject<T extends object, K extends keyof T> = T &
  {
    [P in K & string as PromisifyMethod<T[P]> extends never
      ? never
      : `${P}Async`]: PromisifyMethod<T[P]>;
  };

// type CoreTypes = string | boolean | number | bigint | undefined | null | ;

export {
  IndexOfArray,
  Awaited,
  TupleOf,
  Reverse,
  AddString,
  TuplifyUnion,
  UnionType,
  UnionString,
  CoreDataBaseSchema,
  DomainUseCaseSchema,
  Digit,
  OnPropChangedMethods,
  PromisifyMethod,
  PromisifyObject,
};
