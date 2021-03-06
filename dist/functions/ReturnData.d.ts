import { ClientErrorData, InformationData, PermissionDeniedData, RedirectData, ReturnData, ServerErrorData, SuccessData, TimeOutErrorData } from '../interfaces';
export declare function isInformation<T>(data: any): data is InformationData<T>;
export declare function isSuccessFull<T>(data: any): data is SuccessData<T>;
export declare function isRedirect<T>(data: any): data is RedirectData<T>;
export declare function hadPayload<T>(data: any): data is RedirectData<T> | SuccessData<T> | InformationData<T>;
export declare function isClientError(data: any): data is ClientErrorData;
export declare function isServerError(data: any): data is ServerErrorData;
export declare function isPermissionError(data: any): data is PermissionDeniedData;
export declare function isTimeOutError(data: any): data is TimeOutErrorData;
export declare function isError(data: any): data is ClientErrorData | ServerErrorData | PermissionDeniedData | TimeOutErrorData;
export declare function isReturnData<T>(data: any): data is ReturnData<T>;
