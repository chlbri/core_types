import { ExceptionStatus } from "../status";
export interface IException<T extends ExceptionStatus = ExceptionStatus> {
    readonly statut: T;
}
export declare class Exception<T extends ExceptionStatus = ExceptionStatus> implements IException<T> {
    readonly statut: T;
    constructor(statut: T);
}
declare type ExceptionObject = {
    [key in ExceptionStatus]?: Exception;
};
export declare const EXCEPTIONS: Required<ExceptionObject>;
export {};
