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

type ArrayHelper1<T extends any[]> = Partial<VSO<T[number]>> | T[number];
export type All<T extends any[] = any[]> = {
  $all: T extends any[] ? ArrayHelper1<T> : never;
};

export type ElementMatch<T extends any[] = any[]> = {
  $em: T extends any[] ? ArrayHelper1<T> : never;
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

type VSOAny<T = any> = Equals & NotEquals & ObjectIn<T> & ObjectNotIn<T>;

type EP = ExistsProp | NotExistsProp;
// #endregion

// #region VSONumber
type VSONumber = VSOAny<number> &
  GreaterThan &
  GreaterThanOrEquals &
  LessThan &
  LessThanOrEquals &
  Modulo;
// #endregion

// #region VSOString
type VSOString = VSOAny<string> & StringContains & StartsWith & EndsWith;
// #endregion

// TODO: add logical operators and $exists, $type
export type ValueSearchOperations<T = string> = T extends number
  ? VSONumber
  : T extends string
  ? VSOString
  : VSOAny<T>;

type VSO<T = any> = ValueSearchOperations<T>;

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

export type LogicalClauses<T = string> = And<T> | Not<T> | Nor<T> | Or<T>;

// #endregion

// #region Projection

export type Slice = {
  $slice: number | TupleOf<number, 2>;
};

// #endregion

export function isSearchOperation(val: any): val is VSO {
  return Object.keys(val).every((val) => val.startsWith("$"));
}

export type SearchOperation<K> = K extends
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  | any[]
  ?
      | Partial<
          (NotExistsProp | ExistsProp) &
            VSO<K> &
            LogicalClauses<K> &
            ArrayClauses<K>
        >
      | K
  : {
      [key in keyof K]?: SearchOperation<K[key]>;
    };

export type DataSearchOperations<T> =
  | Not<T>
  | {
      [key in keyof T]?: SearchOperation<T[key]>;
    };
