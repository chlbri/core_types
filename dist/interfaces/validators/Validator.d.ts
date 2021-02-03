import { CoreTypes } from "../../types";
import Exception from "../Exceptions";
declare type Condition<T = any> = (arg: T) => boolean;
export default abstract class Validator<T extends CoreTypes> {
    validate: Condition<T>;
    exception: Exception;
    constructor(validate: Condition<T>, exception?: Exception);
}
export {};
