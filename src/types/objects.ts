import { AddString } from "./strings";

export type NExtract<T, U extends T> = Extract<T, U>;
export type NExclude<T, U extends T> = Exclude<T, U>;
export type NOmit<T, K extends keyof T> = Omit<T, K>;

export type PromisifyMethod<T> = T extends (...args: infer P) => infer R
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

export type OnlyNamesOf<T, TProp> = {
  [K in keyof T]: Exclude<T[K], undefined> extends TProp ? K : never;
}[keyof T];

export type OnlyPropertiesOf<T, TProp> = Pick<T, OnlyNamesOf<T, TProp>>;

export type OnPropChangedMethods<T, I extends keyof T> = T &
  {
    [K in I & string as AddString<K, "", "Changed">]: (
      cb: (newValue: T[K]) => void
    ) => void;
  };
