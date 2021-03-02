import {
  isStatus,
  isStatusClientError,
  isStatusInformation,
  isStatusRedirect,
  isStatusServerError,
  isStatusSuccessFull,
} from "../status";
import {
  ClientErrorData,
  InformationData,
  RedirectData,
  ReturnData,
  ServerErrorData,
  SuccessData,
} from "../types/ReturnData";

// #region functions
function isD<T>(func: (val: number) => boolean, data: ReturnData<T>) {
  return func(data.status);
}

function isSuccessFull<T>(
  data: ReturnData<T>
): data is SuccessData<T> {
  return isD(isStatusSuccessFull, data);
}

const r3: ReturnData = {
  status: 500,
};

function isInformation<T>(
  data: ReturnData<T>
): data is InformationData<T> {
  return isD(isStatusInformation, data);
}

function isRedirect<T>(data: ReturnData<T>): data is RedirectData<T> {
  return isD(isStatusRedirect, data);
}

function isClientError(data: ReturnData): data is ClientErrorData {
  return isD(isStatusClientError, data);
}

function isServerError(data: ReturnData): data is ServerErrorData {
  return isD(isStatusServerError, data);
}

function isReturnData<T>(data: ReturnData<T>): data is ReturnData<T> {
  return isD(isStatus, data);
}
// #endregion

export {
  isSuccessFull,
  isInformation,
  isRedirect,
  isClientError,
  isServerError,
  isReturnData,
};
