declare class Exception {
    readonly statut: number;
    readonly message: string;
    constructor(statut: number, message: string);
}
export { Exception };
