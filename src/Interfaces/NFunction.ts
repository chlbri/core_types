export type NFunction<I extends unknown[] = any[], O extends any = any> = (
  ...arg: I
) => O;
