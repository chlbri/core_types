import { ExceptionStatus } from '../status';
export interface IException<T extends ExceptionStatus = ExceptionStatus> {
    readonly status: T;
}
export declare class Exception<T extends ExceptionStatus = ExceptionStatus> implements IException<T> {
    readonly status: T;
    constructor(status: T);
}
export declare const EXCEPTIONS: {
    [key in ExceptionStatus]: Exception;
};
