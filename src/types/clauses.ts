export type Equals = {
  op: "$eq";
  search: any;
};

export type NotEquals = {
  op: "$ne";
  search: any;
};

export type GreaterThan = {
  op: "$gt";
  search: number;
};

export type GreaterThanOrEquals = {
  op: "$gte";
  search: number;
};

export type LessThan = {
  op: "$lt";
  search: number;
};

export type LessThanOrEquals = {
  op: "$lte";
  search: number;
};

export type StringContains = {
  op: "contains";
  search: string;
};

export type ArrayIn<T = any> = {
  op: "$in";
  search: T[];
};

export type ArrayNotIn<T = any> = {
  op: "$nin";
  search: T[];
};

export type StartsWith = {
  op: "startsWith";
  search: string;
};

export type EndsWith = {
  op: "endsWith";
  endsWith: string;
};

// TODO: add logical operators and $exists, $type
export type ValueSearchOperations<
  T = string | number
> = T extends number
  ?
      | Equals
      | GreaterThan
      | GreaterThanOrEquals
      | LessThan
      | LessThanOrEquals
      | ArrayIn
      | ArrayNotIn
  : T extends string
  ?
      | Equals
      | StringContains
      | ArrayIn
      | ArrayNotIn
      | StartsWith
      | EndsWith
  : Equals | ArrayIn | ArrayNotIn;

export function isSearchOperation(
  val: any
): val is ValueSearchOperations {
  return Object.keys(val).includes("op");
}

export type DataSearchOperations<T> = {
  [key in keyof T]?: ValueSearchOperations<T[key]> | T[key];
};
