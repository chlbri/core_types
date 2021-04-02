import { WithoutId } from "./../entities/WithoutId";
import { Entity, WithId } from "../entities";
import { ClientErrorStatus, InformationStatus, RedirectStatus, ServerErrorStatus, Status, SuccesfullStatus } from "../status";
import { Nullish } from "../types";
export declare type SuccessData<T = any> = T extends true | undefined | null ? {
    status: SuccesfullStatus;
    payload: T;
} : {
    status: SuccesfullStatus;
};
export declare type InformationData<T = any> = T extends true | undefined | null ? {
    status: InformationStatus;
    payload?: Nullish<T>;
} : {
    status: InformationStatus;
};
export declare type RedirectData<T = any> = T extends true | undefined | null ? {
    status: RedirectStatus;
    payload?: Nullish<T>;
} : {
    status: RedirectStatus;
};
export declare type ClientErrorData = {
    status: ClientErrorStatus;
};
export declare type ServerErrorData = {
    status: ServerErrorStatus;
};
export declare type ReturnData<T = any> = SuccessData<T> | InformationData<T> | RedirectData<T> | ClientErrorData | ServerErrorData;
export declare type PromiseReturnData<T = any> = Promise<ReturnData<T>>;
export declare type DataFromPromiseWithId<T extends PromiseReturnData<Entity>> = T extends PromiseReturnData<infer U> ? ReturnData<WithId<U>> : never;
export declare type DataFromPromiseWithoutId<T extends PromiseReturnData<Entity>> = T extends PromiseReturnData<infer U> ? ReturnData<WithoutId<U>> : never;
export declare type ReturnMessageKey<T extends string = string> = `${T}_${Status}`;
