export type NFunction<
  I extends unknown[] = any[],
  O extends any = any
> = (...arg: I) => O;

type T1 = NFunction<[string, number], boolean>;

const e: T1 = (f, d) => true;
