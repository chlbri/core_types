import { ClientErrorData, InformationData, RedirectData, ReturnData, ServerErrorData, SuccessData } from "../interfaces";
export declare function isSuccessFull<T>(data: ReturnData<T>): data is SuccessData<T>;
export declare function isInformation<T>(data: ReturnData<T>): data is InformationData<T>;
export declare function isRedirect<T>(data: ReturnData<T>): data is RedirectData<T>;
export declare function isClientError(data: ReturnData): data is ClientErrorData;
export declare function isServerError(data: ReturnData): data is ServerErrorData;
export declare function isReturnData<T>(data: ReturnData<T>): data is ReturnData<T>;
