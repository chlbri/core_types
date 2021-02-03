import { CoreTypes } from "../Types";
import { Exception } from "./Exceptions";
import { Validator } from "./Validators";
export default abstract class ValueObject<T extends CoreTypes> {
    private value;
    private validators;
    constructor(value: T, validators: Validator<T>[]);
    get unSafe(): T;
    get safe(): Exception | T;
    get isValid(): boolean;
    static validate<T>(value: T | Exception): value is T;
    chain<N extends CoreTypes>(next: ValueObject<N>): this | ValueObject<N>;
}
