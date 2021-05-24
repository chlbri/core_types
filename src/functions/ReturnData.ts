import {
  ClientErrorData,
  InformationData,
  PermissionErrorData,
  RedirectData,
  ReturnData,
  ServerErrorData,
  SuccessData,
  TimeOutErrorData
} from "../interfaces";
import {
  isStatus,
  isStatusClientError, isStatusException,


  isStatusInformation,
  isStatusPermission,
  isStatusRedirect,
  isStatusServerError,
  isStatusSuccessFull,
  isTimeOutClientError
} from "../status";

function isD<T>(
  func: (val: number) => boolean,
  data: ReturnData<T>
) {
  return func(data.status);
}

// #region Had Payload
export function isInformation<T>(
  data: ReturnData<T>
): data is InformationData<T> {
  return isD(isStatusInformation, data);
}

export function isSuccessFull<T>(
  data: ReturnData<T>
): data is SuccessData<T> {
  return isD(isStatusSuccessFull, data);
}

export function isRedirect<T>(
  data: ReturnData<T>
): data is RedirectData<T> {
  return isD(isStatusRedirect, data);
}

export function hadPayload<T>(
  data: ReturnData<T>
): data is
  | RedirectData<T>
  | SuccessData<T>
  | InformationData<T> {
  return (
    isRedirect(data) ||
    isSuccessFull(data) ||
    isInformation(data)
  );
}
// #endregion

// #region Errors
export function isClientError(
  data: ReturnData
): data is ClientErrorData {
  return isD(isStatusClientError, data);
}

export function isServerError(
  data: ReturnData
): data is ServerErrorData {
  return isD(isStatusServerError, data);
}

export function isTimeOutError(
  data: ReturnData
): data is TimeOutErrorData {
  return isD(isTimeOutClientError, data);
}

export function isPermissionError(
  data: ReturnData
): data is PermissionErrorData {
  return isD(isStatusPermission, data);
}

export function isError(
  data: ReturnData
): data is
  | ClientErrorData
  | ServerErrorData
  | PermissionErrorData
  | TimeOutErrorData {
  return isD(isStatusException, data);
}
// #endregion

export function isReturnData<T>(
  data: ReturnData<T>
): data is ReturnData<T> {
  return isD(isStatus, data);
}
