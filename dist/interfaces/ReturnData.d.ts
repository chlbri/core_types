import { Entity, WithId } from "../entities";
import { ClientErrorStatus, InformationStatus, RedirectStatus, ServerErrorStatus, Status, SuccesfullStatus } from "../status";
import { Nullish } from "../types";
import { WithoutId } from "./../entities/WithoutId";
export declare type SuccessData<T = any> = {
    status: SuccesfullStatus;
    payload: T;
};
export declare type InformationData<T = any> = {
    status: InformationStatus;
    payload?: Nullish<T>;
};
export declare type RedirectData<T = any> = {
    status: RedirectStatus;
    payload?: Nullish<T>;
};
export declare type ClientErrorData = {
    status: ClientErrorStatus;
};
export declare type ServerErrorData = {
    status: ServerErrorStatus;
};
export declare type ReturnData<T = any> = SuccessData<T> | InformationData<T> | RedirectData<T> | ClientErrorData | ServerErrorData;
export declare type PromiseReturnData<T = any> = Promise<ReturnData<T>>;
export declare type DataFromPromiseWithId<T extends PromiseReturnData<Entity>> = T extends PromiseReturnData<infer U> ? U extends any[] ? ReturnData<WithId<U[number]>[]> : ReturnData<WithId<U>> : never;
export declare type DataFromPromiseWithoutId<T extends PromiseReturnData<any>> = T extends PromiseReturnData<infer U> ? U extends any[] ? ReturnData<WithoutId<U[number]>[]> : ReturnData<WithoutId<U>> : never;
export declare type ReturnMessageKey<T extends string = string> = `${T}_${Status}`;
