import { ValueObject } from '../interfaces';

export type TypeFromVO<T> = T extends ValueObject<infer U>
  ? U
  : never;
