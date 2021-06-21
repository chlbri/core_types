import { LengthOf, TuplifyUnion } from './arrays';
import { AddString } from './strings';

export type NExtract<T, U extends T> = Extract<T, U>;
export type NExclude<T, U extends T> = Exclude<T, U>;
export type NOmit<T, K extends keyof T> = Omit<T, K>;

export type PromisifyMethod<T> = T extends (
  ...args: infer P
) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

export type PromisifyObject<T extends object> = T &
  {
    [P in keyof T & string as PromisifyMethod<T[P]> extends never
      ? never
      : `${P}Async`]: PromisifyMethod<T[P]>;
  };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? Key : never;
};

type NotFilterFlags<Base, Condition> = {
  [Key in keyof Base]: Condition extends Base[Key] ? never : Key;
};

type AllowedNames<Base, Condition> = FilterFlags<
  Base,
  Condition
>[keyof Base];

type NotAllowedNames<Base, Condition> = NotFilterFlags<
  Base,
  Condition
>[keyof Base];

export type SubType<Base, Condition> = Pick<
  Base,
  AllowedNames<Base, Condition>
>;

export type NotSubType<Base, Condition> = Pick<
  Base,
  NotAllowedNames<Base, Condition>
>;

export type OnlyNamesOf<T, TProp> = {
  [K in keyof T]: Exclude<T[K], undefined> extends TProp
    ? K
    : never;
}[keyof T];

export type OnlyPropertiesOf<T, TProp> = Pick<
  T,
  OnlyNamesOf<T, TProp>
>;

export type OnPropChangedMethods<T, I extends keyof T> = T &
  {
    [K in I & string as AddString<K, '', 'Changed'>]: (
      cb: (newValue: T[K]) => void,
    ) => void;
  };

export type Undefiny<T> = NotSubType<T, undefined> &
  Partial<SubType<T, undefined>>;

export type Nullify<T> = NotSubType<T, null> &
  Partial<SubType<T, null>>;

type _OmitWithoutPartial<T, O extends string> = {
  [key in keyof Omit<T, O>]: O extends keyof T[key]
    ? LengthOf<
        TuplifyUnion<keyof _OmitWithoutPartial<T[key], O>>
      > extends 1
      ? _OmitWithoutPartial<T[key], O>[keyof _OmitWithoutPartial<
          T[key],
          O
        >]
      : _OmitWithoutPartial<T[key], O>
    : T[key];
};

type _OmitWithPartial<T, O extends string> = Undefiny<
  _OmitWithoutPartial<T, O>
>;

export type OmitRecursive<T, O extends string> = {
  [key in keyof _OmitWithPartial<T, O>]: _OmitWithPartial<
    T[key],
    O
  >;
};
