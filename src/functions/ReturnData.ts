import {
  ClientErrorData,
  InformationData,
  PermissionErrorData,
  RedirectData,
  ReturnData,
  ServerErrorData,
  SuccessData,
} from "../interfaces";
import {
  isStatus,
  isStatusClientError,
  isStatusInformation,
  isStatusPermission,
  isStatusRedirect,
  isStatusServerError,
  isStatusSuccessFull,
} from "../status";

// #region functions
function isD<T>(
  func: (val: number) => boolean,
  data: ReturnData<T>
) {
  return func(data.status);
}

export function isSuccessFull<T>(
  data: ReturnData<T>
): data is SuccessData<T> {
  return isD(isStatusSuccessFull, data);
}

const r3: ReturnData = {
  status: 500,
};

export function isInformation<T>(
  data: ReturnData<T>
): data is InformationData<T> {
  return isD(isStatusInformation, data);
}

export function isPermission(
  data: ReturnData
): data is PermissionErrorData {
  return isD(isStatusPermission, data);
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

export function isReturnData<T>(
  data: ReturnData<T>
): data is ReturnData<T> {
  return isD(isStatus, data);
}
// #endregion
