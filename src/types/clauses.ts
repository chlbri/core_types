import { WithoutId } from "../entities";

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

export type ArrayIn = {
  op: "$in";
  search: any[];
};
export type ArrayNotIn = {
  op: "$nin";
  search: any[];
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
export type ValueSearchOperations<T> =
  | Equals
  | GreaterThan
  | GreaterThanOrEquals
  | LessThan
  | LessThanOrEquals
  | StringContains
  | ArrayIn
  | ArrayNotIn
  | StartsWith
  | EndsWith
  | WithoutId<T>;

export type DataSearchOperations<T> = {
  [key in keyof T]?: ValueSearchOperations<T[key]>;
};
