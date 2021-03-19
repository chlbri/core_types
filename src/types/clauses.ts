import { TupleOf } from "./arrays";

export type Equals = {
  $eq: any;
};

export type NotEquals = {
  $ne: any;
};

export type ObjectIn<T = any> = {
  $in: T[];
};

export type ObjectNotIn<T = any> = {
  $nin: T[];
};

export type GreaterThan = {
  $gt: number;
};

export type GreaterThanOrEquals = {
  $gte: number;
};

export type LessThan = {
  $lt: number;
};

export type LessThanOrEquals = {
  $lte: number;
};

export type Modulo = {
  $mod: number;
};

export type StringContains = {
  $cts: string;
};

export type StartsWith = {
  $sw: string;
};

export type EndsWith = {
  $ew: string;
};

export type Language =
  | "da"
  | "du"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "hu"
  | "it"
  | "nb"
  | "pt"
  | "ro"
  | "ru"
  | "es"
  | "sv"
  | "tr";

export type RegEx = {
  $regex: string | RegExp;
};

export type Text = {
  $text: string | RegExp;
};

export type TypeAliases =
  | "double"
  | "string"
  | "object"
  | "array"
  | "binData"
  | "objectId"
  | "bool";

// #region Array
export type All<T extends any[] = any[]> = {
  $all: T extends any[] ? T : never;
};

export type ElementMatch<T extends any[] = any[]> = {
  $em: T extends any[] ? VSO<T[number]> | T[number] : never;
};

export type Size<T extends any[] = any[]> = {
  $size: T extends any[] ? number : never;
};

export type ArrayClauses<T = any[]> = T extends any[]
  ? All<T> | ElementMatch<T> | Size<T>
  : {};
// #endregion

// #region Element
export type ExistsProp = {
  $exists: true;
};

export type NotExistsProp = {
  $exists: false;
};

type EP = ExistsProp | NotExistsProp;
// #endregion

// #region VSONumber
type VSONumber = VSOAny &
  GreaterThan &
  GreaterThanOrEquals &
  LessThan &
  LessThanOrEquals &
  Modulo;
// #endregion

// #region VSOString
type VSOString = VSOAny & StringContains & StartsWith & EndsWith;
// #endregion

type VSOAny = Equals & NotEquals & ObjectIn & ObjectNotIn;

// TODO: add logical operators and $exists, $type
export type ValueSearchOperations<T = string> = T extends number
  ? VSONumber
  : T extends string
  ? VSOString
  : VSOAny;

type VSO<T = string> = ValueSearchOperations<T>;

// #region Logical

type LogH<T> = Partial<VSO<T> | LogicalClauses<T> | T>;

export type And<T = string> = {
  $and: LogH<T>[];
};

const ande: And<string> = {
  $and: [{ $and: [], $cts: "3" }],
};

export type Not<T = string> = {
  $not: LogH<T>;
};

export type Nor<T = string> = {
  $nor: LogH<T>[];
};

export type Or<T = string> = {
  $or: LogH<T>[];
};

export type LogicalClauses<T = string> =
  | And<T>
  | Not<T>
  | Nor<T>
  | Or<T>;

// #endregion

// #region Projection

export type Slice = {
  $slice: number | TupleOf<number, 2>;
};

// #endregion

export function isSearchOperation(
  val: any
): val is ValueSearchOperations {
  return Object.keys(val).includes("op");
}

export type DataSearchOperations<T> = {
  [key in keyof T]?:
    | NotExistsProp
    | (T[key] extends infer K
        ? Partial<
            ExistsProp & VSO<K> & LogicalClauses<K> & ArrayClauses<K>
          >
        : never)
    | T[key];
};

interface I1 {
  name: string;
  age: number;
}

const v3: DataSearchOperations<I1> = {
  age: {
    $lte: 4,
    $and: [1, 3, { $gt: 3 }],
    $not: { $mod: 3 },
  },
  name: "3",
};

type T1 =
  | NotExistsProp
  | Partial<
      ExistsProp &
        VSO<string[]> &
        ArrayClauses<string[]> &
        LogicalClauses<string>
    >;
const v1: T1 = { $exists: false };
