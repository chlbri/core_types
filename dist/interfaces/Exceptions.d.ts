export default class Exception {
    readonly statut: number;
    readonly message: string;
    constructor(statut: number, message: string);
}
declare const DEFAULT_EXCEPTION: Exception;
declare const UNKNOWN_EXCEPTION: Exception;
export { DEFAULT_EXCEPTION, UNKNOWN_EXCEPTION };
