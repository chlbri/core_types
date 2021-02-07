import { FetchStatus } from "../helpers";
declare type NExtract<T, U extends T> = T extends U ? T : never;
declare type NExclude<T, U extends T> = T extends U ? never : T;
declare type GoodResponse<T = undefined> = {
    status: NExtract<FetchStatus, 200 | 204>;
    payload?: T;
};
declare type BadResponse<T = undefined> = {
    status: NExclude<FetchStatus, 200 | 204>;
    error?: T;
};
declare function isGoodResponse<E, T>(val: ReturnData<E, T>): val is GoodResponse<E>;
declare function isBadResponse<E, T>(val: ReturnData<E, T>): val is BadResponse<T>;
declare type ReturnData<Good = undefined, Bad = undefined> = GoodResponse<Good> | BadResponse<Bad>;
declare type PromiseReturnData<Good = undefined, Bad = undefined> = Promise<ReturnData<Good, Bad>>;
declare const Response500: BadResponse;
declare const Response300: BadResponse;
declare const Response404: BadResponse;
declare const Response204: GoodResponse;
export { ReturnData, GoodResponse, BadResponse, PromiseReturnData, isGoodResponse, isBadResponse, Response300, Response404, Response500, Response204, };
