import { Exception } from "./exceptions";
import { Validator } from "./validators";
export declare abstract class ValueObject<T> {
    private value;
    private validators;
    constructor(value: T, validators: Validator<T>[]);
    get unSafe(): T;
    get safe(): Exception | T;
    get isValid(): boolean;
    chain<N>(next: ValueObject<N>): this | ValueObject<N>;
}
