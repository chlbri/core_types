declare class Exception<T extends number = number> {
    readonly statut: T;
    readonly message: string;
    constructor(statut: T, message: string);
}
export { Exception };
