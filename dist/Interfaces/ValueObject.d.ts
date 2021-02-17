import { Exception } from "./exceptions";
import { IValidator } from "./validators";
declare type ReadonlyValidators<T> = IValidator<T>[];
export declare class ValueObject<T = any, V extends ReadonlyValidators<T> = any> {
    private value;
    validators: V;
    constructor(value: T, validators: V);
    get unSafe(): T;
    get safe(): Exception<number> | T;
    get isValid(): boolean;
    chain<N, VO extends ReadonlyValidators<N>>(next: ValueObject<N, VO>): VO extends V ? this : ValueObject<N, VO>;
}
export declare type SimpleObject<T> = T extends ValueObject<infer R> ? R : T extends (...args: any[]) => any ? never : T;
export {};
