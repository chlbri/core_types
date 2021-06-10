import {
  ClientErrorData,
  InformationData,
  PermissionErrorData,
  RedirectData,
  ReturnData,
  ServerErrorData,
  SuccessData,
  TimeOutErrorData,
} from "../interfaces";
import {
  isStatus,
  isStatusClientError,
  isStatusException,
  isStatusInformation,
  isStatusPermission,
  isStatusRedirect,
  isStatusServerError,
  isStatusSuccessFull,
  isTimeOutClientError,
} from "../status";

function isD(func: (val: number) => boolean, data: any) {
  return func(data.status);
}

// #region Had Payload
export function isInformation<T>(data: any): data is InformationData<T> {
  return isD(isStatusInformation, data);
}

export function isSuccessFull<T>(data: any): data is SuccessData<T> {
  return isD(isStatusSuccessFull, data);
}

export function isRedirect<T>(data: any): data is RedirectData<T> {
  return isD(isStatusRedirect, data);
}

export function hadPayload<T>(
  data: any
): data is RedirectData<T> | SuccessData<T> | InformationData<T> {
  return isRedirect(data) || isSuccessFull(data) || isInformation(data);
}
// #endregion

// #region Errors
export function isClientError(data: any): data is ClientErrorData {
  return isD(isStatusClientError, data);
}

export function isServerError(data: any): data is ServerErrorData {
  return isD(isStatusServerError, data);
}

export function isPermissionError(data: any): data is PermissionErrorData {
  return isD(isStatusPermission, data);
}

export function isTimeOutError(data: any): data is TimeOutErrorData {
  return isD(isTimeOutClientError, data);
}

export function isError(
  data: any
): data is
  | ClientErrorData
  | ServerErrorData
  | PermissionErrorData
  | TimeOutErrorData {
  return isD(isStatusException, data);
}
// #endregion

export function isReturnData<T>(data: any): data is ReturnData<T> {
  return isD(isStatus, data);
}
