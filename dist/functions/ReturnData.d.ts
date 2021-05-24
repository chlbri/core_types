import { ClientErrorData, InformationData, PermissionErrorData, RedirectData, ReturnData, ServerErrorData, SuccessData, TimeOutErrorData } from "../interfaces";
export declare function isInformation<T>(data: ReturnData<T>): data is InformationData<T>;
export declare function isSuccessFull<T>(data: ReturnData<T>): data is SuccessData<T>;
export declare function isRedirect<T>(data: ReturnData<T>): data is RedirectData<T>;
export declare function hadPayload<T>(data: ReturnData<T>): data is RedirectData<T> | SuccessData<T> | InformationData<T>;
export declare function isClientError(data: ReturnData): data is ClientErrorData;
export declare function isServerError(data: ReturnData): data is ServerErrorData;
export declare function isTimeOutError(data: ReturnData): data is TimeOutErrorData;
export declare function isPermissionError(data: ReturnData): data is PermissionErrorData;
export declare function isError(data: ReturnData): data is ClientErrorData | ServerErrorData | PermissionErrorData | TimeOutErrorData;
export declare function isReturnData<T>(data: ReturnData<T>): data is ReturnData<T>;
