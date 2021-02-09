import { Exception } from "./exceptions";
import { Validator } from "./validators";
export declare class ValueObject<T> {
    private value;
    validators: Validator<T>[];
    constructor(value: T, validators: Validator<T>[]);
    get unSafe(): T;
    get safe(): Exception | T;
    get isValid(): boolean;
    chain<N>(next: ValueObject<N>): this | ValueObject<N>;
}
