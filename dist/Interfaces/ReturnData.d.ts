import { FetchStatus } from "../helpers";
import { CoreTypes } from "../Types";
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
declare type ReturnData<Good = undefined, Bad extends CoreTypes = undefined> = GoodResponse<Good> | BadResponse<Bad>;
declare type PromiseReturnData<Good = undefined, Bad extends CoreTypes = undefined> = Promise<ReturnData<Good, Bad>>;
declare const Response500: BadResponse;
declare const Response300: BadResponse;
declare const Response404: BadResponse;
declare const Response204: GoodResponse;
export { ReturnData, GoodResponse, BadResponse, PromiseReturnData, Response300, Response404, Response500, Response204, };
