import { AddString } from "./strings";

type NExtract<T, U extends T> = Extract<T, U>;
type NExclude<T, U extends T> = Exclude<T, U>;
type NOmit<T, K extends keyof T> = Omit<T, K>;

type PromisifyMethod<T> = T extends (...args: infer P) => infer R
  ? R extends Promise<any>
    ? T
    : (...args: P) => Promise<R>
  : never;

type PromisifyObject<T extends object> = T &
  {
    [P in keyof T & string as PromisifyMethod<T[P]> extends never
      ? never
      : `${P}Async`]: PromisifyMethod<T[P]>;
  };

type WithoutPassword<T> = Omit<T, "password">;

type OnlyNamesOf<T, TProp> = {
  [K in keyof T]: Exclude<T[K], undefined> extends TProp ? K : never;
}[keyof T];

type OnlyPropertiesOf<T, TProp> = Pick<T, OnlyNamesOf<T, TProp>>;

type OnPropChangedMethods<T, I extends keyof T> = T &
  {
    [K in I & string as AddString<K, "", "Changed">]: (
      cb: (newValue: T[K]) => void
    ) => void;
  };

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

type _ReadAU = ReadonlyArray<unknown>;

type CoreDataBaseSchema<
  T extends _ReadAU,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = "s"
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForDatabase<T1, K, Before, After>
    : U1 extends _ReadAU
    ? _SetEntityForDatabase<T1, K, Before, After> &
        CoreDataBaseSchema<U1, K, Before, After>
    : never
  : never;

type DomainUseCaseSchema<
  T extends _ReadAU,
  K extends keyof T[number],
  Before extends string = "",
  After extends string = ""
> = T extends [infer T1, ...infer U1]
  ? U1[0] extends undefined
    ? _SetEntityForUseCase<T1, K, Before, After>
    : U1 extends _ReadAU
    ? _SetEntityForUseCase<T1, K, Before, After> &
        DomainUseCaseSchema<U1, K, Before, After>
    : never
  : {
      [key: string]: T[number];
    };

export {
  NExtract,
  NExclude,
  NOmit,
  PromisifyMethod,
  PromisifyObject,
  WithoutPassword,
  OnlyNamesOf,
  OnlyPropertiesOf,
  OnPropChangedMethods,
  CoreDataBaseSchema,
  DomainUseCaseSchema,
};
