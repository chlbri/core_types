export type Equals = {
  op: "equals";
  search: any;
};

export type GreaterThan = {
  op: "greaterThan";
  search: number;
};

export type LessThan = {
  op: "lessThan";
  search: number;
};

export type StringContains = {
  op: "contains";
  search: string;
};

export type ArrayFilter = {
  op: "filter";
  search: any[];
};

export type StartsWith = {
  op: "startsWith";
  search: string;
};

export type EndsWith = {
  op: "endsWith";
  search: string;
};

type _DataSearchOperations<T> =
  | Equals
  | GreaterThan
  | LessThan
  | StringContains
  | ArrayFilter
  | StartsWith
  | EndsWith
  | T;

export type DataSearchOperations<T> = {
  [key in keyof T]?: _DataSearchOperations<T[key]>;
};
