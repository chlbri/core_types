import { ValueObject } from '../interfaces';
export declare type TypeFromVO<T> = T extends ValueObject<infer U> ? U : never;
