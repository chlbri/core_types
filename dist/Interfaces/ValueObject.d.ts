import { CoreTypes } from "../Types";
import { Exception } from "./Exceptions";
import { Validator } from "./Validators";
export declare abstract class ValueObject<T extends CoreTypes> {
    private value;
    private validators;
    constructor(value: T, validators: Validator<T>[]);
    get unSafe(): T;
    get safe(): Exception | T;
    get isValid(): boolean;
    chain<N extends CoreTypes>(next: ValueObject<N>): this | ValueObject<N>;
}
